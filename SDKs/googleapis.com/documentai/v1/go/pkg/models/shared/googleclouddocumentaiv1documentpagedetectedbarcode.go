package shared

// GoogleCloudDocumentaiV1DocumentPageDetectedBarcode
// A detected barcode.
type GoogleCloudDocumentaiV1DocumentPageDetectedBarcode struct {
	Barcode *GoogleCloudDocumentaiV1Barcode            `json:"barcode,omitempty"`
	Layout  *GoogleCloudDocumentaiV1DocumentPageLayout `json:"layout,omitempty"`
}
