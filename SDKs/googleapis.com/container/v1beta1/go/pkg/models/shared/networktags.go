package shared

// NetworkTags
// Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).
type NetworkTags struct {
	Tags []string `json:"tags,omitempty"`
}
