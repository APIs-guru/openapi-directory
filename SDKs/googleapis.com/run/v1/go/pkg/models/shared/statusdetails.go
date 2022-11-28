package shared

// StatusDetails
// StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
type StatusDetails struct {
	Causes            []StatusCause `json:"causes,omitempty"`
	Group             *string       `json:"group,omitempty"`
	Kind              *string       `json:"kind,omitempty"`
	Name              *string       `json:"name,omitempty"`
	RetryAfterSeconds *int32        `json:"retryAfterSeconds,omitempty"`
	UID               *string       `json:"uid,omitempty"`
}
