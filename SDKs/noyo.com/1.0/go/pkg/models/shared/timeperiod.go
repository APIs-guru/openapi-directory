package shared

type TimePeriodUnitEnum string

const (
	TimePeriodUnitEnumAnnual      TimePeriodUnitEnum = "annual"
	TimePeriodUnitEnumMonth       TimePeriodUnitEnum = "month"
	TimePeriodUnitEnumSemiMonthly TimePeriodUnitEnum = "semi-monthly"
)

type TimePeriod struct {
	Amount int32              `json:"amount"`
	Unit   TimePeriodUnitEnum `json:"unit"`
}
