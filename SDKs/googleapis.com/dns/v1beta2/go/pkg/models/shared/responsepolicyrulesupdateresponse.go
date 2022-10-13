package shared

type ResponsePolicyRulesUpdateResponse struct {
	Header             *ResponseHeader     `json:"header"`
	ResponsePolicyRule *ResponsePolicyRule `json:"responsePolicyRule"`
}
