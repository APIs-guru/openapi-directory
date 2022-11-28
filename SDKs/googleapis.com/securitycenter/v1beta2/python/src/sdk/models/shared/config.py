from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigModuleEnablementStateEnum(str, Enum):
    ENABLEMENT_STATE_UNSPECIFIED = "ENABLEMENT_STATE_UNSPECIFIED"
    INHERITED = "INHERITED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class Config:
    r"""Config
    Configuration of a module.
    """
    
    module_enablement_state: Optional[ConfigModuleEnablementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleEnablementState') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
