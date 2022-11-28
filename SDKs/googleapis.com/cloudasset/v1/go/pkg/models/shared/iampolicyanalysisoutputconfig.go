package shared

// IamPolicyAnalysisOutputConfig
// Output configuration for export IAM policy analysis destination.
type IamPolicyAnalysisOutputConfig struct {
	BigqueryDestination *GoogleCloudAssetV1BigQueryDestination `json:"bigqueryDestination,omitempty"`
	GcsDestination      *GoogleCloudAssetV1GcsDestination      `json:"gcsDestination,omitempty"`
}
