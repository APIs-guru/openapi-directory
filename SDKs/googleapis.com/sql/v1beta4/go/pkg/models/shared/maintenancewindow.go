package shared

type MaintenanceWindowUpdateTrackEnum string

const (
	MaintenanceWindowUpdateTrackEnumSQLUpdateTrackUnspecified MaintenanceWindowUpdateTrackEnum = "SQL_UPDATE_TRACK_UNSPECIFIED"
	MaintenanceWindowUpdateTrackEnumCanary                    MaintenanceWindowUpdateTrackEnum = "canary"
	MaintenanceWindowUpdateTrackEnumStable                    MaintenanceWindowUpdateTrackEnum = "stable"
)

type MaintenanceWindow struct {
	Day         *int32                            `json:"day"`
	Hour        *int32                            `json:"hour"`
	Kind        *string                           `json:"kind"`
	UpdateTrack *MaintenanceWindowUpdateTrackEnum `json:"updateTrack"`
}
