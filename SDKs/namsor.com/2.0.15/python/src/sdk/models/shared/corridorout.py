from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorridorOut:
    r"""CorridorOut
    Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
    """
    
    first_last_name_diasporaed_out: Optional[FirstLastNameDiasporaedOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameDiasporaedOut') }})
    first_last_name_gendered_out: Optional[FirstLastNameGenderedOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameGenderedOut') }})
    first_last_name_origined_out: Optional[FirstLastNameOriginedOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameOriginedOut') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
