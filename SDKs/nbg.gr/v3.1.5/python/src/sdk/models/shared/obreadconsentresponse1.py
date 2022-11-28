from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadConsentResponse1:
    data: ObReadDataConsentResponse1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Links = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Meta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    risk: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
