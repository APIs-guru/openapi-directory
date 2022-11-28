from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Headers:
    r"""Headers
    A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
    """
    
    locations: Optional[List[LocationIDSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    number_of_items: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfItems') }})
    postal_code_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeGroupNames') }})
    prices: Optional[List[Price]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    weights: Optional[List[Weight]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weights') }})
    
