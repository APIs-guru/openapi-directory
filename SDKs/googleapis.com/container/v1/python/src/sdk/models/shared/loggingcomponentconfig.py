from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LoggingComponentConfigEnableComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    SYSTEM_COMPONENTS = "SYSTEM_COMPONENTS"
    WORKLOADS = "WORKLOADS"
    APISERVER = "APISERVER"
    SCHEDULER = "SCHEDULER"
    CONTROLLER_MANAGER = "CONTROLLER_MANAGER"


@dataclass_json
@dataclass
class LoggingComponentConfig:
    r"""LoggingComponentConfig
    LoggingComponentConfig is cluster logging component configuration.
    """
    
    enable_components: Optional[List[LoggingComponentConfigEnableComponentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableComponents') }})
    
