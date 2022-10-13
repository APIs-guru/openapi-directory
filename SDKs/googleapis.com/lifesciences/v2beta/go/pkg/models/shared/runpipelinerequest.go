package shared

type RunPipelineRequest struct {
	Labels      map[string]string `json:"labels"`
	Pipeline    *Pipeline         `json:"pipeline"`
	PubSubTopic *string           `json:"pubSubTopic"`
}
