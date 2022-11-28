from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderinvoicesCreateRefundInvoiceRequest:
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    refund_only_option: Optional[OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundOnlyOption') }})
    return_option: Optional[OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnOption') }})
    shipment_invoices: Optional[List[ShipmentInvoice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentInvoices') }})
    
