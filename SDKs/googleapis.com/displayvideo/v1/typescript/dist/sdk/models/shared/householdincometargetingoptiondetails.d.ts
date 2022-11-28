import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HouseholdIncomeTargetingOptionDetailsHouseholdIncomeEnum {
    HouseholdIncomeUnspecified = "HOUSEHOLD_INCOME_UNSPECIFIED",
    HouseholdIncomeUnknown = "HOUSEHOLD_INCOME_UNKNOWN",
    HouseholdIncomeLower50Percent = "HOUSEHOLD_INCOME_LOWER_50_PERCENT",
    HouseholdIncomeTop41To50Percent = "HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT",
    HouseholdIncomeTop31To40Percent = "HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT",
    HouseholdIncomeTop21To30Percent = "HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT",
    HouseholdIncomeTop11To20Percent = "HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT",
    HouseholdIncomeTop10Percent = "HOUSEHOLD_INCOME_TOP_10_PERCENT"
}
/**
 * Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
**/
export declare class HouseholdIncomeTargetingOptionDetails extends SpeakeasyBase {
    householdIncome?: HouseholdIncomeTargetingOptionDetailsHouseholdIncomeEnum;
}
