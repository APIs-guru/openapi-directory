from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Bidder:
    r"""Bidder
    Bidder settings.
    """
    
    bypass_nonguaranteed_deals_pretargeting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bypassNonguaranteedDealsPretargeting') }})
    cookie_matching_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieMatchingNetworkId') }})
    cookie_matching_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieMatchingUrl') }})
    deals_billing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealsBillingId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
