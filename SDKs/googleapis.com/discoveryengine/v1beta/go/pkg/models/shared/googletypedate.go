package shared

// GoogleTypeDate
// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
type GoogleTypeDate struct {
	Day   *int32 `json:"day,omitempty"`
	Month *int32 `json:"month,omitempty"`
	Year  *int32 `json:"year,omitempty"`
}
