package shared

type EventPeriodRange struct {
	Kind              *string `json:"kind,omitempty"`
	PeriodEndMillis   *string `json:"periodEndMillis,omitempty"`
	PeriodStartMillis *string `json:"periodStartMillis,omitempty"`
}
