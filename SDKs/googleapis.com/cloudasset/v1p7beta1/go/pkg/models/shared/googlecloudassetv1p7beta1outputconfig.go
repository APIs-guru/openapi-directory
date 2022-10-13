package shared

type GoogleCloudAssetV1p7beta1OutputConfig struct {
	BigqueryDestination *GoogleCloudAssetV1p7beta1BigQueryDestination `json:"bigqueryDestination"`
	GcsDestination      *GoogleCloudAssetV1p7beta1GcsDestination      `json:"gcsDestination"`
}
