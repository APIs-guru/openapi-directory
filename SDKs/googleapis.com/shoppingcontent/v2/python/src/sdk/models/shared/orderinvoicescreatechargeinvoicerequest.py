from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invoicesummary
from . import shipmentinvoicelineiteminvoice


@dataclass_json
@dataclass
class OrderinvoicesCreateChargeInvoiceRequest:
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceId' }})
    invoice_summary: Optional[invoicesummary.InvoiceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceSummary' }})
    line_item_invoices: Optional[List[shipmentinvoicelineiteminvoice.ShipmentInvoiceLineItemInvoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemInvoices' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentGroupId' }})
    
