from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Application:
    messages: Messages = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    voice: Voice = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keys: Optional[Keys] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
