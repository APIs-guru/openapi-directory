from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import promotion


@dataclass_json
@dataclass
class UnitInvoiceAdditionalCharge:
    additional_charge_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalChargeAmount' }})
    additional_charge_promotions: Optional[List[promotion.Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalChargePromotions' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
