from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderLegacyPromotionBenefit:
    discount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    offer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerIds') }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    tax_impact: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxImpact') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
