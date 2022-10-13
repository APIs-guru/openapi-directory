from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbillingbudgetsv1budgetamount
from . import googlecloudbillingbudgetsv1filter
from . import googlecloudbillingbudgetsv1notificationsrule
from . import googlecloudbillingbudgetsv1thresholdrule


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1Budget:
    amount: Optional[googlecloudbillingbudgetsv1budgetamount.GoogleCloudBillingBudgetsV1BudgetAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    budget_filter: Optional[googlecloudbillingbudgetsv1filter.GoogleCloudBillingBudgetsV1Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetFilter' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notifications_rule: Optional[googlecloudbillingbudgetsv1notificationsrule.GoogleCloudBillingBudgetsV1NotificationsRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationsRule' }})
    threshold_rules: Optional[List[googlecloudbillingbudgetsv1thresholdrule.GoogleCloudBillingBudgetsV1ThresholdRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdRules' }})
    
