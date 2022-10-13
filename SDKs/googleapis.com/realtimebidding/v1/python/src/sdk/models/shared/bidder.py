from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Bidder:
    bypass_nonguaranteed_deals_pretargeting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bypassNonguaranteedDealsPretargeting' }})
    cookie_matching_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieMatchingNetworkId' }})
    cookie_matching_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieMatchingUrl' }})
    deals_billing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealsBillingId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
