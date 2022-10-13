from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MonitoringComponentConfigEnableComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    SYSTEM_COMPONENTS = "SYSTEM_COMPONENTS"
    WORKLOADS = "WORKLOADS"
    APISERVER = "APISERVER"
    SCHEDULER = "SCHEDULER"
    CONTROLLER_MANAGER = "CONTROLLER_MANAGER"


@dataclass_json
@dataclass
class MonitoringComponentConfig:
    enable_components: Optional[List[MonitoringComponentConfigEnableComponentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableComponents' }})
    
