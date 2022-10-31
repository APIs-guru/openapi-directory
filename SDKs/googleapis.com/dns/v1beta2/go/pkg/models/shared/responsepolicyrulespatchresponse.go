package shared



type ResponsePolicyRulesPatchResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    ResponsePolicyRule *ResponsePolicyRule `json:"responsePolicyRule,omitempty"`
    
}

