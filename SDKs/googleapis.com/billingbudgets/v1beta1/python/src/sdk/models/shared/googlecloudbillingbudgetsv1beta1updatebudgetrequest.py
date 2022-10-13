from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbillingbudgetsv1beta1budget


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest:
    budget: Optional[googlecloudbillingbudgetsv1beta1budget.GoogleCloudBillingBudgetsV1beta1Budget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budget' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
