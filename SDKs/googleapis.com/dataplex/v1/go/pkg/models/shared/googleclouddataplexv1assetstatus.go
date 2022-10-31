package shared

type GoogleCloudDataplexV1AssetStatus struct {
	ActiveAssets                 *int32  `json:"activeAssets,omitempty"`
	SecurityPolicyApplyingAssets *int32  `json:"securityPolicyApplyingAssets,omitempty"`
	UpdateTime                   *string `json:"updateTime,omitempty"`
}
