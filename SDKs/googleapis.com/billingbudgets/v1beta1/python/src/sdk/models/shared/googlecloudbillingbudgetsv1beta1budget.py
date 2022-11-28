from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1BudgetInput:
    r"""GoogleCloudBillingBudgetsV1beta1BudgetInput
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    all_updates_rule: Optional[GoogleCloudBillingBudgetsV1beta1AllUpdatesRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUpdatesRule') }})
    amount: Optional[GoogleCloudBillingBudgetsV1beta1BudgetAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[GoogleCloudBillingBudgetsV1beta1Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    threshold_rules: Optional[List[GoogleCloudBillingBudgetsV1beta1ThresholdRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    

@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1Budget:
    r"""GoogleCloudBillingBudgetsV1beta1Budget
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    all_updates_rule: Optional[GoogleCloudBillingBudgetsV1beta1AllUpdatesRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUpdatesRule') }})
    amount: Optional[GoogleCloudBillingBudgetsV1beta1BudgetAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[GoogleCloudBillingBudgetsV1beta1Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    threshold_rules: Optional[List[GoogleCloudBillingBudgetsV1beta1ThresholdRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    
