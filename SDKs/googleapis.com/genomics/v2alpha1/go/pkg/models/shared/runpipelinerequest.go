package shared

type RunPipelineRequest struct {
	Labels      map[string]string `json:"labels,omitempty"`
	Pipeline    *Pipeline         `json:"pipeline,omitempty"`
	PubSubTopic *string           `json:"pubSubTopic,omitempty"`
}
