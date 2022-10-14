package shared

type GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig struct {
	GcsDocuments *GoogleCloudDocumentaiV1beta3GcsDocuments `json:"gcsDocuments,omitempty"`
	GcsPrefix    *GoogleCloudDocumentaiV1beta3GcsPrefix    `json:"gcsPrefix,omitempty"`
}
