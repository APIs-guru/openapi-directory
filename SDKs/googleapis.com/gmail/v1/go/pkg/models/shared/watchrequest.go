package shared




type WatchRequestLabelFilterActionEnum string

const (
    WatchRequestLabelFilterActionEnumInclude WatchRequestLabelFilterActionEnum = "include"
WatchRequestLabelFilterActionEnumExclude WatchRequestLabelFilterActionEnum = "exclude"
)


type WatchRequest struct {
    LabelFilterAction *WatchRequestLabelFilterActionEnum `json:"labelFilterAction,omitempty"`
    LabelIds []string `json:"labelIds,omitempty"`
    TopicName *string `json:"topicName,omitempty"`
    
}

