from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum(str, Enum):
    CALENDAR_PERIOD_UNSPECIFIED = "CALENDAR_PERIOD_UNSPECIFIED"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"

class GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum(str, Enum):
    CREDIT_TYPES_TREATMENT_UNSPECIFIED = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
    INCLUDE_ALL_CREDITS = "INCLUDE_ALL_CREDITS"
    EXCLUDE_ALL_CREDITS = "EXCLUDE_ALL_CREDITS"
    INCLUDE_SPECIFIED_CREDITS = "INCLUDE_SPECIFIED_CREDITS"


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1Filter:
    r"""GoogleCloudBillingBudgetsV1beta1Filter
    A filter for a budget, limiting the scope of the cost to calculate.
    """
    
    calendar_period: Optional[GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarPeriod') }})
    credit_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTypes') }})
    credit_types_treatment: Optional[GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTypesTreatment') }})
    custom_period: Optional[GoogleCloudBillingBudgetsV1beta1CustomPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPeriod') }})
    labels: Optional[dict[str, List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    projects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    subaccounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccounts') }})
    
