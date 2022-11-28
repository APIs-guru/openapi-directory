from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MinimumOrderValueTableStoreCodeSetWithMov:
    r"""MinimumOrderValueTableStoreCodeSetWithMov
    A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
    """
    
    store_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCodes') }})
    value: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
