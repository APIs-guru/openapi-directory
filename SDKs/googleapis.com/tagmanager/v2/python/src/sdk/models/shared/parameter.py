from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import parameter
from . import parameter

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
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    list: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list' }})
    map: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'map' }})
    type: Optional[ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
