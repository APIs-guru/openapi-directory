package shared




type GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum string

const (
    GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumCalendarPeriodUnspecified GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum = "CALENDAR_PERIOD_UNSPECIFIED"
GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumMonth GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum = "MONTH"
GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumQuarter GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum = "QUARTER"
GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumYear GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum = "YEAR"
)



type GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum string

const (
    GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumCreditTypesTreatmentUnspecified GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumIncludeAllCredits GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum = "INCLUDE_ALL_CREDITS"
GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumExcludeAllCredits GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum = "EXCLUDE_ALL_CREDITS"
GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumIncludeSpecifiedCredits GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum = "INCLUDE_SPECIFIED_CREDITS"
)


type GoogleCloudBillingBudgetsV1Filter struct {
    CalendarPeriod *GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum `json:"calendarPeriod,omitempty"`
    CreditTypes []string `json:"creditTypes,omitempty"`
    CreditTypesTreatment *GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum `json:"creditTypesTreatment,omitempty"`
    CustomPeriod *GoogleCloudBillingBudgetsV1CustomPeriod `json:"customPeriod,omitempty"`
    Labels map[string][]interface{} `json:"labels,omitempty"`
    Projects []string `json:"projects,omitempty"`
    Services []string `json:"services,omitempty"`
    Subaccounts []string `json:"subaccounts,omitempty"`
    
}

