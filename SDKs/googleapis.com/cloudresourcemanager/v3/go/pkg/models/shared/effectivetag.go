package shared

// EffectiveTag
// An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
type EffectiveTag struct {
	Inherited          *bool   `json:"inherited,omitempty"`
	NamespacedTagKey   *string `json:"namespacedTagKey,omitempty"`
	NamespacedTagValue *string `json:"namespacedTagValue,omitempty"`
	TagKey             *string `json:"tagKey,omitempty"`
	TagValue           *string `json:"tagValue,omitempty"`
}
