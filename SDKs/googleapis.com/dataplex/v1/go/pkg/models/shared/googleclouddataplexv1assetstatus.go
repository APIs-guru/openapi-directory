package shared

type GoogleCloudDataplexV1AssetStatus struct {
	ActiveAssets                 *int32  `json:"activeAssets"`
	SecurityPolicyApplyingAssets *int32  `json:"securityPolicyApplyingAssets"`
	UpdateTime                   *string `json:"updateTime"`
}
