from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocalPostOffer:
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponCode' }})
    redeem_online_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redeemOnlineUrl' }})
    terms_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsConditions' }})
    
