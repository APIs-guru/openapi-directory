package shared

// CollectionOverride
// CollectionOverride allows resource handling overrides for specific resources within a BaseType
type CollectionOverride struct {
	Collection *string    `json:"collection,omitempty"`
	MethodMap  *MethodMap `json:"methodMap,omitempty"`
	Options    *Options   `json:"options,omitempty"`
}
