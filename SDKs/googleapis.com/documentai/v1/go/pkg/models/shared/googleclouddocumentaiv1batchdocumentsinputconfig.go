package shared

// GoogleCloudDocumentaiV1BatchDocumentsInputConfig
// The common config to specify a set of documents used as input.
type GoogleCloudDocumentaiV1BatchDocumentsInputConfig struct {
	GcsDocuments *GoogleCloudDocumentaiV1GcsDocuments `json:"gcsDocuments,omitempty"`
	GcsPrefix    *GoogleCloudDocumentaiV1GcsPrefix    `json:"gcsPrefix,omitempty"`
}
