package shared

// AnalyzeOrgPolicyGovernedContainersResponse
// The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.
type AnalyzeOrgPolicyGovernedContainersResponse struct {
	Constraint         *AnalyzerOrgPolicyConstraint          `json:"constraint,omitempty"`
	GovernedContainers []GoogleCloudAssetV1GovernedContainer `json:"governedContainers,omitempty"`
	NextPageToken      *string                               `json:"nextPageToken,omitempty"`
}
