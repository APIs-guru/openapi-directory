package shared

type DatafeedStatusError struct {
	Code     *string                 `json:"code"`
	Count    *string                 `json:"count"`
	Examples []DatafeedStatusExample `json:"examples"`
	Message  *string                 `json:"message"`
}
