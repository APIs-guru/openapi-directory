package shared

// PathSubstitution
// Defines the MediaBrowser.Model.Configuration.PathSubstitution.
type PathSubstitution struct {
	From *string `json:"From,omitempty"`
	To   *string `json:"To,omitempty"`
}
