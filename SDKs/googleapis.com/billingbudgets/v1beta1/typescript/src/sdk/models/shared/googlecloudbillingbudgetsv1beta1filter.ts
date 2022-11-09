import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBillingBudgetsV1beta1CustomPeriod } from "./googlecloudbillingbudgetsv1beta1customperiod";

export enum GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum {
    CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED"
,    Month = "MONTH"
,    Quarter = "QUARTER"
,    Year = "YEAR"
}

export enum GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum {
    CreditTypesTreatmentUnspecified = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
,    IncludeAllCredits = "INCLUDE_ALL_CREDITS"
,    ExcludeAllCredits = "EXCLUDE_ALL_CREDITS"
,    IncludeSpecifiedCredits = "INCLUDE_SPECIFIED_CREDITS"
}


// GoogleCloudBillingBudgetsV1beta1Filter
/** 
 * A filter for a budget, limiting the scope of the cost to calculate.
**/
export class GoogleCloudBillingBudgetsV1beta1Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarPeriod" })
  calendarPeriod?: GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;

  @Metadata({ data: "json, name=creditTypes" })
  creditTypes?: string[];

  @Metadata({ data: "json, name=creditTypesTreatment" })
  creditTypesTreatment?: GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;

  @Metadata({ data: "json, name=customPeriod" })
  customPeriod?: GoogleCloudBillingBudgetsV1beta1CustomPeriod;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any[]>;

  @Metadata({ data: "json, name=projects" })
  projects?: string[];

  @Metadata({ data: "json, name=services" })
  services?: string[];

  @Metadata({ data: "json, name=subaccounts" })
  subaccounts?: string[];
}
