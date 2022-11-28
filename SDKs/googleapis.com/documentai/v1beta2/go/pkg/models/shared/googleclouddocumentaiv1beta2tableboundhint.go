package shared

// GoogleCloudDocumentaiV1beta2TableBoundHint
// A hint for a table bounding box on the page for table parsing.
type GoogleCloudDocumentaiV1beta2TableBoundHint struct {
	BoundingBox *GoogleCloudDocumentaiV1beta2BoundingPoly `json:"boundingBox,omitempty"`
	PageNumber  *int32                                    `json:"pageNumber,omitempty"`
}
