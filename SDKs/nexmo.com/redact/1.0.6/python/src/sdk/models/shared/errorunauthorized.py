from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorUnauthorized:
    error_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
