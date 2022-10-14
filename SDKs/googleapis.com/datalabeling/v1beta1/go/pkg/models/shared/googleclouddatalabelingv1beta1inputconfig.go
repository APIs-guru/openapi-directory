package shared

type GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumAnnotationTypeUnspecified          GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageClassificationAnnotation      GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageBoundingBoxAnnotation         GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageOrientedBoundingBoxAnnotation GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageBoundingPolyAnnotation        GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_BOUNDING_POLY_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImagePolylineAnnotation            GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_POLYLINE_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageSegmentationAnnotation        GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "IMAGE_SEGMENTATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoShotsClassificationAnnotation GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoObjectTrackingAnnotation      GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "VIDEO_OBJECT_TRACKING_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoObjectDetectionAnnotation     GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "VIDEO_OBJECT_DETECTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoEventAnnotation               GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "VIDEO_EVENT_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumTextClassificationAnnotation       GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "TEXT_CLASSIFICATION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumTextEntityExtractionAnnotation     GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
	GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumGeneralClassificationAnnotation    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = "GENERAL_CLASSIFICATION_ANNOTATION"
)

type GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumDataTypeUnspecified GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumImage               GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = "IMAGE"
	GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumVideo               GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = "VIDEO"
	GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumText                GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = "TEXT"
	GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumGeneralData         GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = "GENERAL_DATA"
)

type GoogleCloudDatalabelingV1beta1InputConfig struct {
	AnnotationType         *GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum `json:"annotationType,omitempty"`
	BigquerySource         *GoogleCloudDatalabelingV1beta1BigQuerySource                `json:"bigquerySource,omitempty"`
	ClassificationMetadata *GoogleCloudDatalabelingV1beta1ClassificationMetadata        `json:"classificationMetadata,omitempty"`
	DataType               *GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum       `json:"dataType,omitempty"`
	GcsSource              *GoogleCloudDatalabelingV1beta1GcsSource                     `json:"gcsSource,omitempty"`
	TextMetadata           *GoogleCloudDatalabelingV1beta1TextMetadata                  `json:"textMetadata,omitempty"`
}
