from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import unitinvoiceadditionalcharge
from . import promotion
from . import price
from . import unitinvoicetaxline


@dataclass_json
@dataclass
class UnitInvoice:
    additional_charges: Optional[List[unitinvoiceadditionalcharge.UnitInvoiceAdditionalCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCharges' }})
    promotions: Optional[List[promotion.Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    unit_price_pretax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricePretax' }})
    unit_price_taxes: Optional[List[unitinvoicetaxline.UnitInvoiceTaxLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPriceTaxes' }})
    
