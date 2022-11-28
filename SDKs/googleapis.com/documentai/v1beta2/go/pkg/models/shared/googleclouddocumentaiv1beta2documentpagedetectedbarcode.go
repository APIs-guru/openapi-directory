package shared

// GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode
// A detected barcode.
type GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode struct {
	Barcode *GoogleCloudDocumentaiV1beta2Barcode            `json:"barcode,omitempty"`
	Layout  *GoogleCloudDocumentaiV1beta2DocumentPageLayout `json:"layout,omitempty"`
}
