package shared

type GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum string

const (
	GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumCalendarPeriodUnspecified GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum = "CALENDAR_PERIOD_UNSPECIFIED"
	GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumMonth                     GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum = "MONTH"
	GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumQuarter                   GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum = "QUARTER"
	GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumYear                      GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum = "YEAR"
)

type GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum string

const (
	GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumCreditTypesTreatmentUnspecified GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
	GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumIncludeAllCredits               GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum = "INCLUDE_ALL_CREDITS"
	GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumExcludeAllCredits               GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum = "EXCLUDE_ALL_CREDITS"
	GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumIncludeSpecifiedCredits         GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum = "INCLUDE_SPECIFIED_CREDITS"
)

type GoogleCloudBillingBudgetsV1beta1Filter struct {
	CalendarPeriod       *GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum       `json:"calendarPeriod,omitempty"`
	CreditTypes          []string                                                        `json:"creditTypes,omitempty"`
	CreditTypesTreatment *GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum `json:"creditTypesTreatment,omitempty"`
	CustomPeriod         *GoogleCloudBillingBudgetsV1beta1CustomPeriod                   `json:"customPeriod,omitempty"`
	Labels               map[string][]interface{}                                        `json:"labels,omitempty"`
	Projects             []string                                                        `json:"projects,omitempty"`
	Services             []string                                                        `json:"services,omitempty"`
	Subaccounts          []string                                                        `json:"subaccounts,omitempty"`
}
