package shared

type PoliciesUpdateResponse struct {
	Header *ResponseHeader `json:"header"`
	Policy *Policy         `json:"policy"`
}
