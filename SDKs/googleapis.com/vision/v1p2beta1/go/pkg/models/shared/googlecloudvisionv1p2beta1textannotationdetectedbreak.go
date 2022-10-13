package shared

type GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum string

const (
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumUnknown      GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "UNKNOWN"
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumSpace        GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "SPACE"
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumSureSpace    GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "SURE_SPACE"
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumEolSureSpace GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "EOL_SURE_SPACE"
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumHyphen       GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "HYPHEN"
	GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnumLineBreak    GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum = "LINE_BREAK"
)

type GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak struct {
	IsPrefix *bool                                                          `json:"isPrefix"`
	Type     *GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum `json:"type"`
}
