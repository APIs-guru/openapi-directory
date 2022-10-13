from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CampaignSummary:
    billing_invoice_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingInvoiceCode' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    pre_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preTaxAmountMicros' }})
    tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmountMicros' }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAmountMicros' }})
    
