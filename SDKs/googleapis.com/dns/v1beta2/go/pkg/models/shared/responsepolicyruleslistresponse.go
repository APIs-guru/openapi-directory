package shared

type ResponsePolicyRulesListResponse struct {
	Header              *ResponseHeader      `json:"header"`
	NextPageToken       *string              `json:"nextPageToken"`
	ResponsePolicyRules []ResponsePolicyRule `json:"responsePolicyRules"`
}
