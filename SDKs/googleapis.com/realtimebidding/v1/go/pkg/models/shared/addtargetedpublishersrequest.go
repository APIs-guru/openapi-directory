package shared

type AddTargetedPublishersRequestTargetingModeEnum string

const (
	AddTargetedPublishersRequestTargetingModeEnumTargetingModeUnspecified AddTargetedPublishersRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedPublishersRequestTargetingModeEnumInclusive                AddTargetedPublishersRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedPublishersRequestTargetingModeEnumExclusive                AddTargetedPublishersRequestTargetingModeEnum = "EXCLUSIVE"
)

// AddTargetedPublishersRequest
// A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
type AddTargetedPublishersRequest struct {
	PublisherIds  []string                                       `json:"publisherIds,omitempty"`
	TargetingMode *AddTargetedPublishersRequestTargetingModeEnum `json:"targetingMode,omitempty"`
}
