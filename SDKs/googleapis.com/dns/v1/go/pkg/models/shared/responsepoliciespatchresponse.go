package shared



type ResponsePoliciesPatchResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    ResponsePolicy *ResponsePolicy `json:"responsePolicy,omitempty"`
    
}

