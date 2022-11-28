from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse:
    r"""GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
    Response for ListBudgets
    """
    
    budgets: Optional[List[GoogleCloudBillingBudgetsV1beta1Budget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
