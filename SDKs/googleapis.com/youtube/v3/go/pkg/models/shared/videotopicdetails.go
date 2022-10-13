package shared

type VideoTopicDetails struct {
	RelevantTopicIds []string `json:"relevantTopicIds"`
	TopicCategories  []string `json:"topicCategories"`
	TopicIds         []string `json:"topicIds"`
}
