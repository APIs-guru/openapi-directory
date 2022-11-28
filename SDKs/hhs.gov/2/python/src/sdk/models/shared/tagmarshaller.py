from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagMarshaller:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[TagLanguageMarshaller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[TagTypeMarshaller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
