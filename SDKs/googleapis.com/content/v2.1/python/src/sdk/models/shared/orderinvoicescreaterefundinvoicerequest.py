from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption
from . import orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption
from . import shipmentinvoice


@dataclass_json
@dataclass
class OrderinvoicesCreateRefundInvoiceRequest:
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceId' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    refund_only_option: Optional[orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundOnlyOption' }})
    return_option: Optional[orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnOption' }})
    shipment_invoices: Optional[List[shipmentinvoice.ShipmentInvoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentInvoices' }})
    
