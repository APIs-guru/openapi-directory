package shared

// SpecialHours
// Represents a set of time periods when a location's operational hours differ from its normal business hours.
type SpecialHours struct {
	SpecialHourPeriods []SpecialHourPeriod `json:"specialHourPeriods,omitempty"`
}
