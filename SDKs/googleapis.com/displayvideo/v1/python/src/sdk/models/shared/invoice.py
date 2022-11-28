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
    A single invoice.
    """
    
    budget_invoice_grouping_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetInvoiceGroupingId') }})
    budget_summaries: Optional[List[BudgetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetSummaries') }})
    corrected_invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedInvoiceId') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    due_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    invoice_type: Optional[InvoiceInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceType') }})
    issue_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    non_budget_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonBudgetMicros') }})
    payments_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAccountId') }})
    payments_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsProfileId') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfUrl') }})
    purchase_order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNumber') }})
    replaced_invoice_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacedInvoiceIds') }})
    service_date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDateRange') }})
    subtotal_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotalAmountMicros') }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmountMicros') }})
    total_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmountMicros') }})
    
