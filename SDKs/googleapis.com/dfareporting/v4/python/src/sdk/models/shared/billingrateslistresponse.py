from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingrate


@dataclass_json
@dataclass
class BillingRatesListResponse:
    billing_rates: Optional[List[billingrate.BillingRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingRates' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
