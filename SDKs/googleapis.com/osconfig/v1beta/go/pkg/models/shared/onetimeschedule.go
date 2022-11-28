package shared

// OneTimeSchedule
// Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
type OneTimeSchedule struct {
	ExecuteTime *string `json:"executeTime,omitempty"`
}
