package shared



type PubsubTarget struct {
    Attributes map[string]string `json:"attributes,omitempty"`
    Data *string `json:"data,omitempty"`
    TopicName *string `json:"topicName,omitempty"`
    
}

