package shared

type CollectionPeriod struct {
	FirstDate *Date `json:"firstDate,omitempty"`
	LastDate  *Date `json:"lastDate,omitempty"`
}
