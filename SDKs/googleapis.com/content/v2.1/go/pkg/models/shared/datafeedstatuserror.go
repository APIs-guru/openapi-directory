package shared

type DatafeedStatusError struct {
	Code     *string                 `json:"code,omitempty"`
	Count    *string                 `json:"count,omitempty"`
	Examples []DatafeedStatusExample `json:"examples,omitempty"`
	Message  *string                 `json:"message,omitempty"`
}
