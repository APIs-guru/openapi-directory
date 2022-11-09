import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBillingBudgetsV1CustomPeriod } from "./googlecloudbillingbudgetsv1customperiod";

export enum GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum {
    CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED"
,    Month = "MONTH"
,    Quarter = "QUARTER"
,    Year = "YEAR"
}

export enum GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum {
    CreditTypesTreatmentUnspecified = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
,    IncludeAllCredits = "INCLUDE_ALL_CREDITS"
,    ExcludeAllCredits = "EXCLUDE_ALL_CREDITS"
,    IncludeSpecifiedCredits = "INCLUDE_SPECIFIED_CREDITS"
}


// GoogleCloudBillingBudgetsV1Filter
/** 
 * A filter for a budget, limiting the scope of the cost to calculate.
**/
export class GoogleCloudBillingBudgetsV1Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarPeriod" })
  calendarPeriod?: GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;

  @Metadata({ data: "json, name=creditTypes" })
  creditTypes?: string[];

  @Metadata({ data: "json, name=creditTypesTreatment" })
  creditTypesTreatment?: GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;

  @Metadata({ data: "json, name=customPeriod" })
  customPeriod?: GoogleCloudBillingBudgetsV1CustomPeriod;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any[]>;

  @Metadata({ data: "json, name=projects" })
  projects?: string[];

  @Metadata({ data: "json, name=services" })
  services?: string[];

  @Metadata({ data: "json, name=subaccounts" })
  subaccounts?: string[];
}
