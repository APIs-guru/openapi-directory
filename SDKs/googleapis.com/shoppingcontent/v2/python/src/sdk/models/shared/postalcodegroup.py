from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostalCodeGroup:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postal_code_ranges: Optional[List[PostalCodeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeRanges') }})
    
