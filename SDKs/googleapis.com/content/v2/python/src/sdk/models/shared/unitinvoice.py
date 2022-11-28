from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnitInvoice:
    additional_charges: Optional[List[UnitInvoiceAdditionalCharge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCharges') }})
    promotions: Optional[List[Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    unit_price_pretax: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPricePretax') }})
    unit_price_taxes: Optional[List[UnitInvoiceTaxLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPriceTaxes') }})
    
