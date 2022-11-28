package shared

// Query
// Represents a query.
type Query struct {
	Metadata *QueryMetadata `json:"metadata,omitempty"`
	Params   *Parameters    `json:"params,omitempty"`
	QueryID  *string        `json:"queryId,omitempty"`
	Schedule *QuerySchedule `json:"schedule,omitempty"`
}

// QueryInput
// Represents a query.
type QueryInput struct {
	Metadata *QueryMetadata `json:"metadata,omitempty"`
	Params   *Parameters    `json:"params,omitempty"`
	Schedule *QuerySchedule `json:"schedule,omitempty"`
}
