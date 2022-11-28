package shared

// GoogleCloudDialogflowV2InputConfig
// Represents the configuration of importing a set of conversation files in Google Cloud Storage.
type GoogleCloudDialogflowV2InputConfig struct {
	GcsSource *GoogleCloudDialogflowV2GcsSources `json:"gcsSource,omitempty"`
}
