package shared

type GoogleCloudDocumentaiV1beta2TableBoundHint struct {
	BoundingBox *GoogleCloudDocumentaiV1beta2BoundingPoly `json:"boundingBox"`
	PageNumber  *int32                                    `json:"pageNumber"`
}
