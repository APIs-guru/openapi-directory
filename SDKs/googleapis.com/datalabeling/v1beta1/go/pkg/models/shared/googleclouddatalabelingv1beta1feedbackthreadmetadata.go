package shared




type GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum string

const (
    GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumFeedbackThreadStatusUnspecified GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumNew GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "NEW"
GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnumReplied GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum = "REPLIED"
)


type GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata struct {
    CreateTime *string `json:"createTime,omitempty"`
    LastUpdateTime *string `json:"lastUpdateTime,omitempty"`
    Status *GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum `json:"status,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    
}

