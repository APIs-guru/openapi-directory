package shared



type PublishBatchRequest struct {
    Messages []PubsubMessage `json:"messages,omitempty"`
    Topic *string `json:"topic,omitempty"`
    
}

