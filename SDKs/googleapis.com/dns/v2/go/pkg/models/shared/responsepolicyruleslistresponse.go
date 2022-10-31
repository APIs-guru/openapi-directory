package shared



type ResponsePolicyRulesListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ResponsePolicyRules []ResponsePolicyRule `json:"responsePolicyRules,omitempty"`
    
}

