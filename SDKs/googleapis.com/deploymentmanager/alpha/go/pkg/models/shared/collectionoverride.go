package shared

type CollectionOverride struct {
	Collection *string    `json:"collection"`
	MethodMap  *MethodMap `json:"methodMap"`
	Options    *Options   `json:"options"`
}
