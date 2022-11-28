package shared

// GcfsConfig
// GcfsConfig contains configurations of Google Container File System (image streaming).
type GcfsConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
