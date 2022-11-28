package shared

// LocalizedString
// A message representing a user-facing string whose value may need to be translated before being displayed.
type LocalizedString struct {
	Args    map[string]string `json:"args,omitempty"`
	Message *string           `json:"message,omitempty"`
	Token   *string           `json:"token,omitempty"`
}
