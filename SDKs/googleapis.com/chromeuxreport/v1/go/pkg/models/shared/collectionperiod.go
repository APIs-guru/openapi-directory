package shared

// CollectionPeriod
// The collection period is a date range which includes the `first` and `last` day.
type CollectionPeriod struct {
	FirstDate *Date `json:"firstDate,omitempty"`
	LastDate  *Date `json:"lastDate,omitempty"`
}
