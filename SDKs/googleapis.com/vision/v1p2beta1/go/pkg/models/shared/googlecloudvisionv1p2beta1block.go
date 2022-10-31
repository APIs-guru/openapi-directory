package shared




type GoogleCloudVisionV1p2beta1BlockBlockTypeEnum string

const (
    GoogleCloudVisionV1p2beta1BlockBlockTypeEnumUnknown GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "UNKNOWN"
GoogleCloudVisionV1p2beta1BlockBlockTypeEnumText GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "TEXT"
GoogleCloudVisionV1p2beta1BlockBlockTypeEnumTable GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "TABLE"
GoogleCloudVisionV1p2beta1BlockBlockTypeEnumPicture GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "PICTURE"
GoogleCloudVisionV1p2beta1BlockBlockTypeEnumRuler GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "RULER"
GoogleCloudVisionV1p2beta1BlockBlockTypeEnumBarcode GoogleCloudVisionV1p2beta1BlockBlockTypeEnum = "BARCODE"
)


type GoogleCloudVisionV1p2beta1Block struct {
    BlockType *GoogleCloudVisionV1p2beta1BlockBlockTypeEnum `json:"blockType,omitempty"`
    BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Paragraphs []GoogleCloudVisionV1p2beta1Paragraph `json:"paragraphs,omitempty"`
    Property *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property,omitempty"`
    
}

