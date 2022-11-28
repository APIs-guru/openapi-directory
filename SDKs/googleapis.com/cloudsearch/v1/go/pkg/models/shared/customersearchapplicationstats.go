package shared

// CustomerSearchApplicationStats
// Search application stats for a customer for the given date.
type CustomerSearchApplicationStats struct {
	Count *string `json:"count,omitempty"`
	Date  *Date   `json:"date,omitempty"`
}
