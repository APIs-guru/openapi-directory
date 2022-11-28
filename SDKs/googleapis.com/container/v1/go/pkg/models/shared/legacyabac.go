package shared

// LegacyAbac
// Configuration for the legacy Attribute Based Access Control authorization mode.
type LegacyAbac struct {
	Enabled *bool `json:"enabled,omitempty"`
}
