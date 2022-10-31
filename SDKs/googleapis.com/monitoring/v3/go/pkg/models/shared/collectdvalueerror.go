package shared

type CollectdValueError struct {
	Error *Status `json:"error,omitempty"`
	Index *int32  `json:"index,omitempty"`
}
