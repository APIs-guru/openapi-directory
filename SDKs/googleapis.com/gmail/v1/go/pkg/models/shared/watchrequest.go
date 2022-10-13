package shared

type WatchRequestLabelFilterActionEnum string

const (
	WatchRequestLabelFilterActionEnumInclude WatchRequestLabelFilterActionEnum = "include"
	WatchRequestLabelFilterActionEnumExclude WatchRequestLabelFilterActionEnum = "exclude"
)

type WatchRequest struct {
	LabelFilterAction *WatchRequestLabelFilterActionEnum `json:"labelFilterAction"`
	LabelIds          []string                           `json:"labelIds"`
	TopicName         *string                            `json:"topicName"`
}
