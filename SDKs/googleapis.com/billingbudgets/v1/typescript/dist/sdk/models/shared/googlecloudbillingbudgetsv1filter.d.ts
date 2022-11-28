import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1CustomPeriod } from "./googlecloudbillingbudgetsv1customperiod";
export declare enum GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum {
    CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED",
    Month = "MONTH",
    Quarter = "QUARTER",
    Year = "YEAR"
}
export declare enum GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum {
    CreditTypesTreatmentUnspecified = "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
    IncludeAllCredits = "INCLUDE_ALL_CREDITS",
    ExcludeAllCredits = "EXCLUDE_ALL_CREDITS",
    IncludeSpecifiedCredits = "INCLUDE_SPECIFIED_CREDITS"
}
/**
 * A filter for a budget, limiting the scope of the cost to calculate.
**/
export declare class GoogleCloudBillingBudgetsV1Filter extends SpeakeasyBase {
    calendarPeriod?: GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
    creditTypes?: string[];
    creditTypesTreatment?: GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
    customPeriod?: GoogleCloudBillingBudgetsV1CustomPeriod;
    labels?: Map<string, any[]>;
    projects?: string[];
    services?: string[];
    subaccounts?: string[];
}
