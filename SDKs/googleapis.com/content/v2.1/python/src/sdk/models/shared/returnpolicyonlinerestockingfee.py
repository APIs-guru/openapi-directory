from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import priceamount


@dataclass_json
@dataclass
class ReturnPolicyOnlineRestockingFee:
    fixed_fee: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedFee' }})
    micro_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microPercent' }})
    
