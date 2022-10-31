package shared



type ResponsePoliciesUpdateResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    ResponsePolicy *ResponsePolicy `json:"responsePolicy,omitempty"`
    
}

