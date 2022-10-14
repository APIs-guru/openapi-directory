package shared

type Volumes struct {
	Items      []Volume `json:"items,omitempty"`
	Kind       *string  `json:"kind,omitempty"`
	TotalItems *int32   `json:"totalItems,omitempty"`
}
