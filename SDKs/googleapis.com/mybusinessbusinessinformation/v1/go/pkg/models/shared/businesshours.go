package shared

// BusinessHours
// Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
type BusinessHours struct {
	Periods []TimePeriod `json:"periods,omitempty"`
}
