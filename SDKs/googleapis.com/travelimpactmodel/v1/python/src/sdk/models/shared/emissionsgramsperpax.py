from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmissionsGramsPerPax:
    r"""EmissionsGramsPerPax
    Grouped emissions per seating class results.
    """
    
    business: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    economy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('economy') }})
    first: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    premium_economy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premiumEconomy') }})
    
