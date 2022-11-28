from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InputMappingLocationEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PATH = "PATH"
    QUERY = "QUERY"
    BODY = "BODY"
    HEADER = "HEADER"


@dataclass_json
@dataclass
class InputMapping:
    r"""InputMapping
    InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
    """
    
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    location: Optional[InputMappingLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    method_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodMatch') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
