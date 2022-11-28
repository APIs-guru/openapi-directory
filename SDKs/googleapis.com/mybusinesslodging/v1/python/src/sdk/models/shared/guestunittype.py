from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GuestUnitType:
    r"""GuestUnitType
    A specific type of unit primarily defined by its features.
    """
    
    codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codes') }})
    features: Optional[GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
