package shared

// ErrorGroupStats
// Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
type ErrorGroupStats struct {
	AffectedServices    []ServiceContext `json:"affectedServices,omitempty"`
	AffectedUsersCount  *string          `json:"affectedUsersCount,omitempty"`
	Count               *string          `json:"count,omitempty"`
	FirstSeenTime       *string          `json:"firstSeenTime,omitempty"`
	Group               *ErrorGroup      `json:"group,omitempty"`
	LastSeenTime        *string          `json:"lastSeenTime,omitempty"`
	NumAffectedServices *int32           `json:"numAffectedServices,omitempty"`
	Representative      *ErrorEvent      `json:"representative,omitempty"`
	TimedCounts         []TimedCount     `json:"timedCounts,omitempty"`
}
