package shared



type IamPolicySearchResult struct {
    AssetType *string `json:"assetType,omitempty"`
    Explanation *Explanation `json:"explanation,omitempty"`
    Folders []string `json:"folders,omitempty"`
    Organization *string `json:"organization,omitempty"`
    Policy *Policy `json:"policy,omitempty"`
    Project *string `json:"project,omitempty"`
    Resource *string `json:"resource,omitempty"`
    
}

