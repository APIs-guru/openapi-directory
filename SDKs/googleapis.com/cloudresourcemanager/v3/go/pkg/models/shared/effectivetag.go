package shared

type EffectiveTag struct {
	Inherited          *bool   `json:"inherited"`
	NamespacedTagKey   *string `json:"namespacedTagKey"`
	NamespacedTagValue *string `json:"namespacedTagValue"`
	TagKey             *string `json:"tagKey"`
	TagValue           *string `json:"tagValue"`
}
