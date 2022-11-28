package shared

// IamPolicySearchResult
// The result for an IAM policy search.
type IamPolicySearchResult struct {
	Explanation *Explanation `json:"explanation,omitempty"`
	Policy      *Policy      `json:"policy,omitempty"`
	Project     *string      `json:"project,omitempty"`
	Resource    *string      `json:"resource,omitempty"`
}
