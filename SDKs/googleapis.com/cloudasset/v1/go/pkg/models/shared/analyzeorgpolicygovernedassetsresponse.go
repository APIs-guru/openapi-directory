package shared

// AnalyzeOrgPolicyGovernedAssetsResponse
// The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.
type AnalyzeOrgPolicyGovernedAssetsResponse struct {
	Constraint     *AnalyzerOrgPolicyConstraint                                            `json:"constraint,omitempty"`
	GovernedAssets []GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset `json:"governedAssets,omitempty"`
	NextPageToken  *string                                                                 `json:"nextPageToken,omitempty"`
}
