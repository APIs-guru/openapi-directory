from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderPromotion:
    applicable_items: Optional[List[OrderPromotionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableItems') }})
    applied_items: Optional[List[OrderPromotionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedItems') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    funder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('funder') }})
    merchant_promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantPromotionId') }})
    price_value: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceValue') }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortTitle') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    tax_value: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxValue') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
