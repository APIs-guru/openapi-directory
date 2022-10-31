package shared



type ResponsePoliciesListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ResponsePolicies []ResponsePolicy `json:"responsePolicies,omitempty"`
    
}

