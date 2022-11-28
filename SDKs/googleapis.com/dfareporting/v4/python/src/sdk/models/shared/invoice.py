from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvoiceInvoiceTypeEnum(str, Enum):
    INVOICE_TYPE_UNSPECIFIED = "INVOICE_TYPE_UNSPECIFIED"
    INVOICE_TYPE_CREDIT = "INVOICE_TYPE_CREDIT"
    INVOICE_TYPE_INVOICE = "INVOICE_TYPE_INVOICE"


@dataclass_json
@dataclass
class Invoice:
    r"""Invoice
    Contains information about a single invoice
    """
    
    campaign_summaries: Optional[List[CampaignSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign_summaries') }})
    corrected_invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedInvoiceId') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_type: Optional[InvoiceInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceType') }})
    issue_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    payments_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAccountId') }})
    payments_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsProfileId') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfUrl') }})
    purchase_order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNumber') }})
    replaced_invoice_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacedInvoiceIds') }})
    service_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEndDate') }})
    service_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceStartDate') }})
    subtotal_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotalAmountMicros') }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmountMicros') }})
    total_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmountMicros') }})
    
