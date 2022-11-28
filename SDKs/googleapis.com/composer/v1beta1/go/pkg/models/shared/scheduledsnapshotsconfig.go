package shared

// ScheduledSnapshotsConfig
// The configuration for scheduled snapshot creation mechanism.
type ScheduledSnapshotsConfig struct {
	Enabled                  *bool   `json:"enabled,omitempty"`
	SnapshotCreationSchedule *string `json:"snapshotCreationSchedule,omitempty"`
	SnapshotLocation         *string `json:"snapshotLocation,omitempty"`
	TimeZone                 *string `json:"timeZone,omitempty"`
}
