package shared

type GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum string

const (
	GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnumAnnotationSentimentUnspecified GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum = "ANNOTATION_SENTIMENT_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnumNegative                       GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum = "NEGATIVE"
	GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnumPositive                       GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum = "POSITIVE"
)

type GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum string

const (
	GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnumAnnotationSourceUnspecified GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum = "ANNOTATION_SOURCE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnumOperator                    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum = "OPERATOR"
)

// GoogleCloudDatalabelingV1beta1Annotation
// Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
type GoogleCloudDatalabelingV1beta1Annotation struct {
	AnnotationMetadata  *GoogleCloudDatalabelingV1beta1AnnotationMetadata                `json:"annotationMetadata,omitempty"`
	AnnotationSentiment *GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum `json:"annotationSentiment,omitempty"`
	AnnotationSource    *GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum    `json:"annotationSource,omitempty"`
	AnnotationValue     *GoogleCloudDatalabelingV1beta1AnnotationValue                   `json:"annotationValue,omitempty"`
	Name                *string                                                          `json:"name,omitempty"`
}
