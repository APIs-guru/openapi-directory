package shared

// GcePersistentDiskCsiDriverConfig
// Configuration for the Compute Engine PD CSI driver.
type GcePersistentDiskCsiDriverConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
