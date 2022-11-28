package shared

// GoogleCloudDataplexV1AssetStatus
// Aggregated status of the underlying assets of a lake or zone.
type GoogleCloudDataplexV1AssetStatus struct {
	ActiveAssets                 *int32  `json:"activeAssets,omitempty"`
	SecurityPolicyApplyingAssets *int32  `json:"securityPolicyApplyingAssets,omitempty"`
	UpdateTime                   *string `json:"updateTime,omitempty"`
}
