package shared

type GoogleCloudDocumentaiV1BatchDocumentsInputConfig struct {
	GcsDocuments *GoogleCloudDocumentaiV1GcsDocuments `json:"gcsDocuments,omitempty"`
	GcsPrefix    *GoogleCloudDocumentaiV1GcsPrefix    `json:"gcsPrefix,omitempty"`
}
