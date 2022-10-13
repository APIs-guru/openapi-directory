package shared

type ResponsePoliciesListResponse struct {
	Header           *ResponseHeader  `json:"header"`
	NextPageToken    *string          `json:"nextPageToken"`
	ResponsePolicies []ResponsePolicy `json:"responsePolicies"`
}
