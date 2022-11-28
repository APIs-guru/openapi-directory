package shared

// AllowedIPRange
// Allowed IP range with user-provided description.
type AllowedIPRange struct {
	Description *string `json:"description,omitempty"`
	Value       *string `json:"value,omitempty"`
}
