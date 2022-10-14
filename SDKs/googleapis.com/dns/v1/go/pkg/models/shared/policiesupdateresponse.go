package shared

type PoliciesUpdateResponse struct {
	Header *ResponseHeader `json:"header,omitempty"`
	Policy *Policy         `json:"policy,omitempty"`
}
