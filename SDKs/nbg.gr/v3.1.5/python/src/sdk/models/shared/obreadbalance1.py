from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadBalance1:
    data: ObReadDataBalance1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Links = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Meta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
