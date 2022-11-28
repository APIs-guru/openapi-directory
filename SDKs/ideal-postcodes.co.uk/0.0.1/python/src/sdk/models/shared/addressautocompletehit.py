from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddressAutocompleteHit:
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    udprn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('udprn') }})
    umprn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('umprn') }})
    urls: Optional[AddressAutocompleteHitUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
