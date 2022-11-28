package shared

// CollectdPayloadError
// Describes the error status for payloads that were not written.
type CollectdPayloadError struct {
	Error       *Status              `json:"error,omitempty"`
	Index       *int32               `json:"index,omitempty"`
	ValueErrors []CollectdValueError `json:"valueErrors,omitempty"`
}
