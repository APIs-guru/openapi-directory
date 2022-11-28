from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPolicyOnlineRestockingFee:
    r"""ReturnPolicyOnlineRestockingFee
    The restocking fee. This can either be a fixed fee or a micro percent.
    """
    
    fixed_fee: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedFee') }})
    micro_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microPercent') }})
    
