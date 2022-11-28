from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonalNameParsedOut:
    first_last_name: Optional[FirstLastNameOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLastName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_parser_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameParserType') }})
    name_parser_type_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameParserTypeAlt') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
