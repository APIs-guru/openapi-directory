package shared

// NetworkTags
// Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.
type NetworkTags struct {
	Tags []string `json:"tags,omitempty"`
}
