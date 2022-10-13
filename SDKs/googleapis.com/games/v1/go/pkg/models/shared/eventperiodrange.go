package shared

type EventPeriodRange struct {
	Kind              *string `json:"kind"`
	PeriodEndMillis   *string `json:"periodEndMillis"`
	PeriodStartMillis *string `json:"periodStartMillis"`
}
