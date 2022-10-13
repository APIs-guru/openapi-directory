from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbillingbudgetsv1beta1allupdatesrule
from . import googlecloudbillingbudgetsv1beta1budgetamount
from . import googlecloudbillingbudgetsv1beta1filter
from . import googlecloudbillingbudgetsv1beta1thresholdrule


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1Budget:
    all_updates_rule: Optional[googlecloudbillingbudgetsv1beta1allupdatesrule.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allUpdatesRule' }})
    amount: Optional[googlecloudbillingbudgetsv1beta1budgetamount.GoogleCloudBillingBudgetsV1beta1BudgetAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    budget_filter: Optional[googlecloudbillingbudgetsv1beta1filter.GoogleCloudBillingBudgetsV1beta1Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetFilter' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    threshold_rules: Optional[List[googlecloudbillingbudgetsv1beta1thresholdrule.GoogleCloudBillingBudgetsV1beta1ThresholdRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdRules' }})
    
