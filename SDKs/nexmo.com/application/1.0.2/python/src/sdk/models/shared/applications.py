from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Applications:
    embedded: Embedded = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Links = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_index: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_index') }})
    page_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    
