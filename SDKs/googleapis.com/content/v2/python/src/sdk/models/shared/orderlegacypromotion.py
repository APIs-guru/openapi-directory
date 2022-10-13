from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlegacypromotionbenefit


@dataclass_json
@dataclass
class OrderLegacyPromotion:
    benefits: Optional[List[orderlegacypromotionbenefit.OrderLegacyPromotionBenefit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefits' }})
    effective_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDates' }})
    generic_redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericRedemptionCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longTitle' }})
    product_applicability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productApplicability' }})
    redemption_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redemptionChannel' }})
    
