package shared

type ResponsePoliciesUpdateResponse struct {
	Header         *ResponseHeader `json:"header"`
	ResponsePolicy *ResponsePolicy `json:"responsePolicy"`
}
