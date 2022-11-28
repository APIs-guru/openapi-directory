from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ParameterTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "typeUnspecified"
    TEMPLATE = "template"
    INTEGER = "integer"
    BOOLEAN = "boolean"
    LIST = "list"
    MAP = "map"
    TRIGGER_REFERENCE = "triggerReference"
    TAG_REFERENCE = "tagReference"


@dataclass_json
@dataclass
class Parameter:
    r"""Parameter
    Represents a Google Tag Manager Parameter.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    list: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    map: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    type: Optional[ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
