package shared

type CollectdPayloadError struct {
	Error       *Status              `json:"error,omitempty"`
	Index       *int32               `json:"index,omitempty"`
	ValueErrors []CollectdValueError `json:"valueErrors,omitempty"`
}
