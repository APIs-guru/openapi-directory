package shared

type GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumStringAggregationTypeUnspecified GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum = "STRING_AGGREGATION_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumMajorityVote                     GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum = "MAJORITY_VOTE"
	GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumUnanimousVote                    GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum = "UNANIMOUS_VOTE"
	GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumNoAggregation                    GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum = "NO_AGGREGATION"
)

// GoogleCloudDatalabelingV1beta1ImageClassificationConfig
// Config for image classification human labeling task.
type GoogleCloudDatalabelingV1beta1ImageClassificationConfig struct {
	AllowMultiLabel       *bool                                                                             `json:"allowMultiLabel,omitempty"`
	AnnotationSpecSet     *string                                                                           `json:"annotationSpecSet,omitempty"`
	AnswerAggregationType *GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum `json:"answerAggregationType,omitempty"`
}
