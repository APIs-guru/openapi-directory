from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class LoggingComponentConfigEnableComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    SYSTEM_COMPONENTS = "SYSTEM_COMPONENTS"
    WORKLOADS = "WORKLOADS"


@dataclass_json
@dataclass
class LoggingComponentConfig:
    enable_components: Optional[List[LoggingComponentConfigEnableComponentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableComponents' }})
    
