package shared

type IamPolicySearchResult struct {
	AssetType    *string      `json:"assetType"`
	Explanation  *Explanation `json:"explanation"`
	Folders      []string     `json:"folders"`
	Organization *string      `json:"organization"`
	Policy       *Policy      `json:"policy"`
	Project      *string      `json:"project"`
	Resource     *string      `json:"resource"`
}
