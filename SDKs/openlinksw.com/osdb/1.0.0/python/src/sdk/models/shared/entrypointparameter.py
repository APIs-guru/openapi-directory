from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class EntryPointParameterTypeEnum(str, Enum):
    QUERY = "query"
    HEADER = "header"
    URI = "uri"
    PATH = "path"
    BODY = "body"


@dataclass_json
@dataclass
class EntryPointParameter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    parameter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter_name' }})
    permitted_values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permitted_values' }})
    required: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: EntryPointParameterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
