package shared

type CollectdValueError struct {
	Error *Status `json:"error"`
	Index *int32  `json:"index"`
}
