package shared

type CollectionOverride struct {
	Collection *string  `json:"collection"`
	Options    *Options `json:"options"`
}
