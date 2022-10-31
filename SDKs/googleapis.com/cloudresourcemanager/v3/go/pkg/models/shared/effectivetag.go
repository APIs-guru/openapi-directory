package shared



type EffectiveTag struct {
    Inherited *bool `json:"inherited,omitempty"`
    NamespacedTagKey *string `json:"namespacedTagKey,omitempty"`
    NamespacedTagValue *string `json:"namespacedTagValue,omitempty"`
    TagKey *string `json:"tagKey,omitempty"`
    TagValue *string `json:"tagValue,omitempty"`
    
}

