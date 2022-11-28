from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnitInvoiceAdditionalCharge:
    additional_charge_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargeAmount') }})
    additional_charge_promotions: Optional[List[Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargePromotions') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
