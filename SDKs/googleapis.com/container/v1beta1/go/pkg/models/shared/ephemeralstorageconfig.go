package shared

// EphemeralStorageConfig
// EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
type EphemeralStorageConfig struct {
	LocalSsdCount *int32 `json:"localSsdCount,omitempty"`
}
