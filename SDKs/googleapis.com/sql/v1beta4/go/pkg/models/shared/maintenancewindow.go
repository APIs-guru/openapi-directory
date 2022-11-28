package shared

type MaintenanceWindowUpdateTrackEnum string

const (
	MaintenanceWindowUpdateTrackEnumSQLUpdateTrackUnspecified MaintenanceWindowUpdateTrackEnum = "SQL_UPDATE_TRACK_UNSPECIFIED"
	MaintenanceWindowUpdateTrackEnumCanary                    MaintenanceWindowUpdateTrackEnum = "canary"
	MaintenanceWindowUpdateTrackEnumStable                    MaintenanceWindowUpdateTrackEnum = "stable"
)

// MaintenanceWindow
// Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
type MaintenanceWindow struct {
	Day         *int32                            `json:"day,omitempty"`
	Hour        *int32                            `json:"hour,omitempty"`
	Kind        *string                           `json:"kind,omitempty"`
	UpdateTrack *MaintenanceWindowUpdateTrackEnum `json:"updateTrack,omitempty"`
}
