package shared

// MenuValue
// A single value that is part of a MenuItem.
type MenuValue struct {
	DisplayName *string `json:"displayName,omitempty"`
	IconURL     *string `json:"iconUrl,omitempty"`
	State       *string `json:"state,omitempty"`
}
