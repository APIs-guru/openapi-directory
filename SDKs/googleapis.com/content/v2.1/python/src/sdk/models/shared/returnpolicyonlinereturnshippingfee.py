from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReturnPolicyOnlineReturnShippingFeeTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FIXED = "FIXED"
    CUSTOMER_PAYING_ACTUAL_FEE = "CUSTOMER_PAYING_ACTUAL_FEE"


@dataclass_json
@dataclass
class ReturnPolicyOnlineReturnShippingFee:
    r"""ReturnPolicyOnlineReturnShippingFee
    The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
    """
    
    fixed_fee: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedFee') }})
    type: Optional[ReturnPolicyOnlineReturnShippingFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
