from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InputMappingLocationEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PATH = "PATH"
    QUERY = "QUERY"
    BODY = "BODY"
    HEADER = "HEADER"


@dataclass_json
@dataclass
class InputMapping:
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    location: Optional[InputMappingLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    method_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodMatch' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
