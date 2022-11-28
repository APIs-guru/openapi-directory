from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderLegacyPromotion:
    benefits: Optional[List[OrderLegacyPromotionBenefit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    effective_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDates') }})
    generic_redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRedemptionCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTitle') }})
    product_applicability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productApplicability') }})
    redemption_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionChannel') }})
    
