from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RepricingRuleRestriction:
    r"""RepricingRuleRestriction
    Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is \"-10\" and the floor.price_delta is \"-12\", the offer price will only be lowered $5 (10% lower than the original offer price).
    """
    
    floor: Optional[RepricingRuleRestrictionBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    use_auto_pricing_min_price: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAutoPricingMinPrice') }})
    
