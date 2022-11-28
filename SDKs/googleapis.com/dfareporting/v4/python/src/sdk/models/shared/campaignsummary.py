from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CampaignSummary:
    r"""CampaignSummary
    Represents a summarized campaign information associated with this invoice.
    """
    
    billing_invoice_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingInvoiceCode') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    pre_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preTaxAmountMicros') }})
    tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmountMicros') }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmountMicros') }})
    
