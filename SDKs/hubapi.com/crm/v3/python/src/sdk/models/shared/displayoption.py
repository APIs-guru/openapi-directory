from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DisplayOptionTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    DANGER = "DANGER"
    INFO = "INFO"


@dataclass_json
@dataclass
class DisplayOption:
    r"""DisplayOption
    Option definition for STATUS dataTypes.
    """
    
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: DisplayOptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
