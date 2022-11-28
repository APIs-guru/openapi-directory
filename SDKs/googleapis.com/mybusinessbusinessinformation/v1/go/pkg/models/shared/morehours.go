package shared

// MoreHours
// The time periods during which a location is open for certain types of business.
type MoreHours struct {
	HoursTypeID *string      `json:"hoursTypeId,omitempty"`
	Periods     []TimePeriod `json:"periods,omitempty"`
}
