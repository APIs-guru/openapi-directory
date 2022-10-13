from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import availableupdates
from . import status
from . import upgradestatus

class DatacenterConnectorStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    OFFLINE = "OFFLINE"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class DatacenterConnector:
    appliance_infrastructure_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceInfrastructureVersion' }})
    appliance_software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceSoftwareVersion' }})
    available_versions: Optional[availableupdates.AvailableUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersions' }})
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationId' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    state: Optional[DatacenterConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade_status: Optional[upgradestatus.UpgradeStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeStatus' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
