from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObOtherFeeChargeDetailType:
    r"""ObOtherFeeChargeDetailType
    Other Fee/charge type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    fee_category: ObFeeCategory1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
