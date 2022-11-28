package shared

// Lien
// A Lien represents an encumbrance on the actions that can be performed on a resource.
type Lien struct {
	CreateTime   *string  `json:"createTime,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Origin       *string  `json:"origin,omitempty"`
	Parent       *string  `json:"parent,omitempty"`
	Reason       *string  `json:"reason,omitempty"`
	Restrictions []string `json:"restrictions,omitempty"`
}
