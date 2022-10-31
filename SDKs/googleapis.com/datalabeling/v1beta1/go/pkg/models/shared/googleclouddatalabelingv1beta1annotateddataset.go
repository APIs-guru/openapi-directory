package shared

type GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum string

const (
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnumAnnotationSourceUnspecified GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum = "ANNOTATION_SOURCE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnumOperator                    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum = "OPERATOR"
)

type GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumAnnotationTypeUnspecified          GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImageClassificationAnnotation      GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImageBoundingBoxAnnotation         GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImageOrientedBoundingBoxAnnotation GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImageBoundingPolyAnnotation        GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_BOUNDING_POLY_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImagePolylineAnnotation            GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_POLYLINE_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumImageSegmentationAnnotation        GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "IMAGE_SEGMENTATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumVideoShotsClassificationAnnotation GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumVideoObjectTrackingAnnotation      GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "VIDEO_OBJECT_TRACKING_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumVideoObjectDetectionAnnotation     GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "VIDEO_OBJECT_DETECTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumVideoEventAnnotation               GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "VIDEO_EVENT_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumTextClassificationAnnotation       GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "TEXT_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumTextEntityExtractionAnnotation     GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnumGeneralClassificationAnnotation    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = "GENERAL_CLASSIFICATION_ANNOTATION"
)

type GoogleCloudDatalabelingV1beta1AnnotatedDataset struct {
	AnnotationSource      *GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum `json:"annotationSource,omitempty"`
	AnnotationType        *GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum   `json:"annotationType,omitempty"`
	BlockingResources     []string                                                            `json:"blockingResources,omitempty"`
	CompletedExampleCount *string                                                             `json:"completedExampleCount,omitempty"`
	CreateTime            *string                                                             `json:"createTime,omitempty"`
	Description           *string                                                             `json:"description,omitempty"`
	DisplayName           *string                                                             `json:"displayName,omitempty"`
	ExampleCount          *string                                                             `json:"exampleCount,omitempty"`
	LabelStats            *GoogleCloudDatalabelingV1beta1LabelStats                           `json:"labelStats,omitempty"`
	Metadata              *GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata             `json:"metadata,omitempty"`
	Name                  *string                                                             `json:"name,omitempty"`
}
