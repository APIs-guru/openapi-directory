package shared

// ChannelTopicDetails
// Freebase topic information related to the channel.
type ChannelTopicDetails struct {
	TopicCategories []string `json:"topicCategories,omitempty"`
	TopicIds        []string `json:"topicIds,omitempty"`
}
