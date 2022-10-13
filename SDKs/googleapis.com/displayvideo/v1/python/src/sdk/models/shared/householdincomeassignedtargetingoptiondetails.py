from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    household_income: Optional[HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'householdIncome' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
