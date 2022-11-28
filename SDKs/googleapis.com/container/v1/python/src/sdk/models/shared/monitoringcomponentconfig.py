from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MonitoringComponentConfigEnableComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    SYSTEM_COMPONENTS = "SYSTEM_COMPONENTS"
    APISERVER = "APISERVER"
    SCHEDULER = "SCHEDULER"
    CONTROLLER_MANAGER = "CONTROLLER_MANAGER"


@dataclass_json
@dataclass
class MonitoringComponentConfig:
    r"""MonitoringComponentConfig
    MonitoringComponentConfig is cluster monitoring component configuration.
    """
    
    enable_components: Optional[List[MonitoringComponentConfigEnableComponentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableComponents') }})
    
