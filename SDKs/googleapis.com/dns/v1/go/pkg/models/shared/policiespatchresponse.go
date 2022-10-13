package shared

type PoliciesPatchResponse struct {
	Header *ResponseHeader `json:"header"`
	Policy *Policy         `json:"policy"`
}
