package shared

type GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumAnnotationTypeUnspecified          GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImageClassificationAnnotation      GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImageBoundingBoxAnnotation         GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImageOrientedBoundingBoxAnnotation GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImageBoundingPolyAnnotation        GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_BOUNDING_POLY_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImagePolylineAnnotation            GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_POLYLINE_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumImageSegmentationAnnotation        GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "IMAGE_SEGMENTATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumVideoShotsClassificationAnnotation GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumVideoObjectTrackingAnnotation      GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "VIDEO_OBJECT_TRACKING_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumVideoObjectDetectionAnnotation     GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "VIDEO_OBJECT_DETECTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumVideoEventAnnotation               GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "VIDEO_EVENT_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumTextClassificationAnnotation       GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "TEXT_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumTextEntityExtractionAnnotation     GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnumGeneralClassificationAnnotation    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = "GENERAL_CLASSIFICATION_ANNOTATION"
)

type GoogleCloudDatalabelingV1beta1Evaluation struct {
	AnnotationType       *GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum `json:"annotationType,omitempty"`
	Config               *GoogleCloudDatalabelingV1beta1EvaluationConfig             `json:"config,omitempty"`
	CreateTime           *string                                                     `json:"createTime,omitempty"`
	EvaluatedItemCount   *string                                                     `json:"evaluatedItemCount,omitempty"`
	EvaluationJobRunTime *string                                                     `json:"evaluationJobRunTime,omitempty"`
	EvaluationMetrics    *GoogleCloudDatalabelingV1beta1EvaluationMetrics            `json:"evaluationMetrics,omitempty"`
	Name                 *string                                                     `json:"name,omitempty"`
}
