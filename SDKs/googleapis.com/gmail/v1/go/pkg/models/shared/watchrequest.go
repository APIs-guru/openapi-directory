package shared

type WatchRequestLabelFilterActionEnum string

const (
	WatchRequestLabelFilterActionEnumInclude WatchRequestLabelFilterActionEnum = "include"
	WatchRequestLabelFilterActionEnumExclude WatchRequestLabelFilterActionEnum = "exclude"
)

// WatchRequest
// Set up or update a new push notification watch on this user's mailbox.
type WatchRequest struct {
	LabelFilterAction *WatchRequestLabelFilterActionEnum `json:"labelFilterAction,omitempty"`
	LabelIds          []string                           `json:"labelIds,omitempty"`
	TopicName         *string                            `json:"topicName,omitempty"`
}
