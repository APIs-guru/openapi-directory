package shared

// RemoveTargetedPublishersRequest
// A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
type RemoveTargetedPublishersRequest struct {
	PublisherIds []string `json:"publisherIds,omitempty"`
}
