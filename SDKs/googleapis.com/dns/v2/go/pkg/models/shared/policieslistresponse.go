package shared



type PoliciesListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Policies []Policy `json:"policies,omitempty"`
    
}

