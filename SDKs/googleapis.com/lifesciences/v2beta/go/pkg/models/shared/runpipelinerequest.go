package shared

// RunPipelineRequest
// The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.
type RunPipelineRequest struct {
	Labels      map[string]string `json:"labels,omitempty"`
	Pipeline    *Pipeline         `json:"pipeline,omitempty"`
	PubSubTopic *string           `json:"pubSubTopic,omitempty"`
}
