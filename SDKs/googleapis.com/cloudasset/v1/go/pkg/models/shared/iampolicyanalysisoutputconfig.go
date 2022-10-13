package shared

type IamPolicyAnalysisOutputConfig struct {
	BigqueryDestination *GoogleCloudAssetV1BigQueryDestination `json:"bigqueryDestination"`
	GcsDestination      *GoogleCloudAssetV1GcsDestination      `json:"gcsDestination"`
}
