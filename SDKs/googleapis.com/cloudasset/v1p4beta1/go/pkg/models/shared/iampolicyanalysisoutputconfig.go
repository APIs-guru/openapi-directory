package shared

// IamPolicyAnalysisOutputConfig
// Output configuration for export IAM policy analysis destination.
type IamPolicyAnalysisOutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
