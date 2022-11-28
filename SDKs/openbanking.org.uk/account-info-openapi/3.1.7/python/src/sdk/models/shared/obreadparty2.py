from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadParty2Data:
    party: Optional[ObParty2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Party') }})
    

@dataclass_json
@dataclass
class ObReadParty2:
    data: ObReadParty2Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
