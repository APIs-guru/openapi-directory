package shared

// VideoTopicDetails
// Freebase topic information related to the video.
type VideoTopicDetails struct {
	RelevantTopicIds []string `json:"relevantTopicIds,omitempty"`
	TopicCategories  []string `json:"topicCategories,omitempty"`
	TopicIds         []string `json:"topicIds,omitempty"`
}
