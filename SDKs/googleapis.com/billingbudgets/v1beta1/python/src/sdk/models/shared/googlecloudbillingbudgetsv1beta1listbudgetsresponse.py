from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbillingbudgetsv1beta1budget


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse:
    budgets: Optional[List[googlecloudbillingbudgetsv1beta1budget.GoogleCloudBillingBudgetsV1beta1Budget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
