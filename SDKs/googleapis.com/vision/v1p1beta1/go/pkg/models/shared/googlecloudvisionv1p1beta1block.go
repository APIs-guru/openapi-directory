package shared

type GoogleCloudVisionV1p1beta1BlockBlockTypeEnum string

const (
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumUnknown GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "UNKNOWN"
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumText    GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "TEXT"
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumTable   GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "TABLE"
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumPicture GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "PICTURE"
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumRuler   GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "RULER"
	GoogleCloudVisionV1p1beta1BlockBlockTypeEnumBarcode GoogleCloudVisionV1p1beta1BlockBlockTypeEnum = "BARCODE"
)

type GoogleCloudVisionV1p1beta1Block struct {
	BlockType   *GoogleCloudVisionV1p1beta1BlockBlockTypeEnum         `json:"blockType,omitempty"`
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox,omitempty"`
	Confidence  *float32                                              `json:"confidence,omitempty"`
	Paragraphs  []GoogleCloudVisionV1p1beta1Paragraph                 `json:"paragraphs,omitempty"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property,omitempty"`
}
