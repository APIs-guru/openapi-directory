package shared

type CollectdPayloadError struct {
	Error       *Status              `json:"error"`
	Index       *int32               `json:"index"`
	ValueErrors []CollectdValueError `json:"valueErrors"`
}
