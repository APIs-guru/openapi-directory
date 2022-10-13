package shared

type IamPolicySearchResult struct {
	Explanation *Explanation `json:"explanation"`
	Policy      *Policy      `json:"policy"`
	Project     *string      `json:"project"`
	Resource    *string      `json:"resource"`
}
