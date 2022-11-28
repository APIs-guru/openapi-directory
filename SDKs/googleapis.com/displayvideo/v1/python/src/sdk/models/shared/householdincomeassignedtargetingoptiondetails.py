from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum(str, Enum):
    HOUSEHOLD_INCOME_UNSPECIFIED = "HOUSEHOLD_INCOME_UNSPECIFIED"
    HOUSEHOLD_INCOME_UNKNOWN = "HOUSEHOLD_INCOME_UNKNOWN"
    HOUSEHOLD_INCOME_LOWER_50_PERCENT = "HOUSEHOLD_INCOME_LOWER_50_PERCENT"
    HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT = "HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT"
    HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT = "HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT"
    HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT = "HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT"
    HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT = "HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT"
    HOUSEHOLD_INCOME_TOP_10_PERCENT = "HOUSEHOLD_INCOME_TOP_10_PERCENT"


@dataclass_json
@dataclass
class HouseholdIncomeAssignedTargetingOptionDetails:
    r"""HouseholdIncomeAssignedTargetingOptionDetails
    Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
    """
    
    household_income: Optional[HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncome') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
