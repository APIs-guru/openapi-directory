from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Buyer:
    r"""Buyer
    RTB Buyer account information.
    """
    
    active_creative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeCreativeCount') }})
    bidder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidder') }})
    billing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingIds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    maximum_active_creative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumActiveCreativeCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
