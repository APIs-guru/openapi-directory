package shared

// RecoveryConfig
// The Recovery settings of an environment.
type RecoveryConfig struct {
	ScheduledSnapshotsConfig *ScheduledSnapshotsConfig `json:"scheduledSnapshotsConfig,omitempty"`
}
