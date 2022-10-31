package shared

type GoogleCloudDocumentaiV1DocumentPageDetectedBarcode struct {
	Barcode *GoogleCloudDocumentaiV1Barcode            `json:"barcode,omitempty"`
	Layout  *GoogleCloudDocumentaiV1DocumentPageLayout `json:"layout,omitempty"`
}
