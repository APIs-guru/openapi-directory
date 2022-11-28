from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordPhotoModelResults:
    r"""LandlordPhotoModelResults
    Holds results from a paged query returning LandlordPhotoModel values
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    data: Optional[List[LandlordPhotoModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
