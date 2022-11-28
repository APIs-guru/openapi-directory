from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryPointParameterTypeEnum(str, Enum):
    QUERY = "query"
    HEADER = "header"
    URI = "uri"
    PATH = "path"
    BODY = "body"


@dataclass_json
@dataclass
class EntryPointParameter:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    parameter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter_name') }})
    permitted_values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permitted_values') }})
    required: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: EntryPointParameterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
