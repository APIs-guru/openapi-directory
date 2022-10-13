package shared

type ErrorGroupStats struct {
	AffectedServices    []ServiceContext `json:"affectedServices"`
	AffectedUsersCount  *string          `json:"affectedUsersCount"`
	Count               *string          `json:"count"`
	FirstSeenTime       *string          `json:"firstSeenTime"`
	Group               *ErrorGroup      `json:"group"`
	LastSeenTime        *string          `json:"lastSeenTime"`
	NumAffectedServices *int32           `json:"numAffectedServices"`
	Representative      *ErrorEvent      `json:"representative"`
	TimedCounts         []TimedCount     `json:"timedCounts"`
}
