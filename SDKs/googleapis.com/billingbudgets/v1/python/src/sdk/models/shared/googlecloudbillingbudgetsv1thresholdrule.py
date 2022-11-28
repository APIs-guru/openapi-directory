from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum(str, Enum):
    BASIS_UNSPECIFIED = "BASIS_UNSPECIFIED"
    CURRENT_SPEND = "CURRENT_SPEND"
    FORECASTED_SPEND = "FORECASTED_SPEND"


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1ThresholdRule:
    r"""GoogleCloudBillingBudgetsV1ThresholdRule
    ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
    """
    
    spend_basis: Optional[GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spendBasis') }})
    threshold_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercent') }})
    
