package shared

type ResponsePoliciesPatchResponse struct {
	Header         *ResponseHeader `json:"header"`
	ResponsePolicy *ResponsePolicy `json:"responsePolicy"`
}
