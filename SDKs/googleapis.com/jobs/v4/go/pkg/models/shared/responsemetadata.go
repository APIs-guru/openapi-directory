package shared

// ResponseMetadata
// Additional information returned to client, such as debugging information.
type ResponseMetadata struct {
	RequestID *string `json:"requestId,omitempty"`
}
