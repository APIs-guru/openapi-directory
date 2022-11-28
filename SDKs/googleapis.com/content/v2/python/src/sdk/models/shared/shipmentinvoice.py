from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShipmentInvoice:
    invoice_summary: Optional[InvoiceSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceSummary') }})
    line_item_invoices: Optional[List[ShipmentInvoiceLineItemInvoice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemInvoices') }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentGroupId') }})
    
