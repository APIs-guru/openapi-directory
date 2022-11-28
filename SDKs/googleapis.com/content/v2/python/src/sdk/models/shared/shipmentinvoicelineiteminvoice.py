from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShipmentInvoiceLineItemInvoice:
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    shipment_unit_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentUnitIds') }})
    unit_invoice: Optional[UnitInvoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitInvoice') }})
    
