package shared

type GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum string

const (
	GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumFeedbackThreadStatusUnspecified GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumNew                             GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "NEW"
	GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumReplied                         GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "REPLIED"
)

type GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata struct {
	CreateTime     *string                                                         `json:"createTime"`
	LastUpdateTime *string                                                         `json:"lastUpdateTime"`
	Status         *GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum `json:"status"`
	Thumbnail      *string                                                         `json:"thumbnail"`
}
