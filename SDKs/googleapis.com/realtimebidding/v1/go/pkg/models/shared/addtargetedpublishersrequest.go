package shared

type AddTargetedPublishersRequestTargetingModeEnum string

const (
	AddTargetedPublishersRequestTargetingModeEnumTargetingModeUnspecified AddTargetedPublishersRequestTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	AddTargetedPublishersRequestTargetingModeEnumInclusive                AddTargetedPublishersRequestTargetingModeEnum = "INCLUSIVE"
	AddTargetedPublishersRequestTargetingModeEnumExclusive                AddTargetedPublishersRequestTargetingModeEnum = "EXCLUSIVE"
)

type AddTargetedPublishersRequest struct {
	PublisherIds  []string                                       `json:"publisherIds,omitempty"`
	TargetingMode *AddTargetedPublishersRequestTargetingModeEnum `json:"targetingMode,omitempty"`
}
