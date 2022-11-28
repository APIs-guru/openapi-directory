package shared

// GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig
// The common config to specify a set of documents used as input.
type GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig struct {
	GcsDocuments *GoogleCloudDocumentaiV1beta3GcsDocuments `json:"gcsDocuments,omitempty"`
	GcsPrefix    *GoogleCloudDocumentaiV1beta3GcsPrefix    `json:"gcsPrefix,omitempty"`
}
