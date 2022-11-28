from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EntryPointHTTPMethodEnum(str, Enum):
    GET = "GET"
    PUT = "PUT"
    POST = "POST"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class EntryPoint:
    content_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_types') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encoding_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding_types') }})
    http_method: EntryPointHTTPMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: List[EntryPointParameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url_template') }})
    
