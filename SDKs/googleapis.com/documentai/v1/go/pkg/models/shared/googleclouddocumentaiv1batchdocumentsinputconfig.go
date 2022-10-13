package shared

type GoogleCloudDocumentaiV1BatchDocumentsInputConfig struct {
	GcsDocuments *GoogleCloudDocumentaiV1GcsDocuments `json:"gcsDocuments"`
	GcsPrefix    *GoogleCloudDocumentaiV1GcsPrefix    `json:"gcsPrefix"`
}
