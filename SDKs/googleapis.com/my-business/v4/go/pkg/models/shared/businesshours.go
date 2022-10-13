package shared

type BusinessHours struct {
	Periods []TimePeriod `json:"periods"`
}
