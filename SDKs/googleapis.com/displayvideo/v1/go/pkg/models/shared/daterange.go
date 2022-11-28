package shared

// DateRange
// A date range.
type DateRange struct {
	EndDate   *Date `json:"endDate,omitempty"`
	StartDate *Date `json:"startDate,omitempty"`
}
