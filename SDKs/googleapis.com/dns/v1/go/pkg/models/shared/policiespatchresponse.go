package shared



type PoliciesPatchResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    Policy *Policy `json:"policy,omitempty"`
    
}

