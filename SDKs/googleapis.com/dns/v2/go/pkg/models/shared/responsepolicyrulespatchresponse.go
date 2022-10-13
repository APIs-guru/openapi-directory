package shared

type ResponsePolicyRulesPatchResponse struct {
	Header             *ResponseHeader     `json:"header"`
	ResponsePolicyRule *ResponsePolicyRule `json:"responsePolicyRule"`
}
