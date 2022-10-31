package shared

type VideoTopicDetails struct {
	RelevantTopicIds []string `json:"relevantTopicIds,omitempty"`
	TopicCategories  []string `json:"topicCategories,omitempty"`
	TopicIds         []string `json:"topicIds,omitempty"`
}
