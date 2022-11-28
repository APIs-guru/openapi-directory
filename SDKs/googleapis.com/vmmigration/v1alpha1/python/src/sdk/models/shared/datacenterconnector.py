from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DatacenterConnectorStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    OFFLINE = "OFFLINE"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class DatacenterConnector:
    r"""DatacenterConnector
    DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
    """
    
    appliance_infrastructure_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceInfrastructureVersion') }})
    appliance_software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceSoftwareVersion') }})
    available_versions: Optional[AvailableUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationId') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[DatacenterConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade_status: Optional[UpgradeStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeStatus') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class DatacenterConnectorInput:
    r"""DatacenterConnectorInput
    DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
    """
    
    available_versions: Optional[AvailableUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationId') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    upgrade_status: Optional[UpgradeStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeStatus') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
