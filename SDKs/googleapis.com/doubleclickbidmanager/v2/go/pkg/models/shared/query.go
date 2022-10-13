package shared

type Query struct {
	Metadata *QueryMetadata `json:"metadata"`
	Params   *Parameters    `json:"params"`
	QueryID  *string        `json:"queryId"`
	Schedule *QuerySchedule `json:"schedule"`
}
