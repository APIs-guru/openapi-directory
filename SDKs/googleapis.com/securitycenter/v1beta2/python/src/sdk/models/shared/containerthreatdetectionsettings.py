from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import config

class ContainerThreatDetectionSettingsServiceEnablementStateEnum(str, Enum):
    ENABLEMENT_STATE_UNSPECIFIED = "ENABLEMENT_STATE_UNSPECIFIED"
    INHERITED = "INHERITED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class ContainerThreatDetectionSettings:
    modules: Optional[dict[str, config.Config]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modules' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_enablement_state: Optional[ContainerThreatDetectionSettingsServiceEnablementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceEnablementState' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
