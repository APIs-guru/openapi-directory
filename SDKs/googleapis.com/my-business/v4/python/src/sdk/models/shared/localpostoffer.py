from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocalPostOffer:
    r"""LocalPostOffer
    Specific fields for offer posts.
    """
    
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponCode') }})
    redeem_online_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redeemOnlineUrl') }})
    terms_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsConditions') }})
    
