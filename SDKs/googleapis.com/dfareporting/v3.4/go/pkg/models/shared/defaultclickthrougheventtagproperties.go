package shared

// DefaultClickThroughEventTagProperties
// Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
type DefaultClickThroughEventTagProperties struct {
	DefaultClickThroughEventTagID *string `json:"defaultClickThroughEventTagId,omitempty"`
	OverrideInheritedEventTag     *bool   `json:"overrideInheritedEventTag,omitempty"`
}
