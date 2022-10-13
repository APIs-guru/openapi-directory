from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import priceamount

class ReturnPolicyOnlineReturnShippingFeeTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FIXED = "FIXED"
    CUSTOMER_PAYING_ACTUAL_FEE = "CUSTOMER_PAYING_ACTUAL_FEE"


@dataclass_json
@dataclass
class ReturnPolicyOnlineReturnShippingFee:
    fixed_fee: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedFee' }})
    type: Optional[ReturnPolicyOnlineReturnShippingFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
