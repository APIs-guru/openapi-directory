package shared

type IamPolicyAnalysisOutputConfig struct {
	BigqueryDestination *GoogleCloudAssetV1BigQueryDestination `json:"bigqueryDestination,omitempty"`
	GcsDestination      *GoogleCloudAssetV1GcsDestination      `json:"gcsDestination,omitempty"`
}
