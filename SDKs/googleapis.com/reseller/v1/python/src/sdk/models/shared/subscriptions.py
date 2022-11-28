from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subscriptions:
    r"""Subscriptions
    A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subscriptions: Optional[List[Subscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
