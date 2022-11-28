from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSubscriptionsResponse:
    r"""ListSubscriptionsResponse
    Response for ListSubscriptions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subscriptions: Optional[List[Subscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
