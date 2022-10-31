package shared




type MaintenanceWindowUpdateTrackEnum string

const (
    MaintenanceWindowUpdateTrackEnumSQLUpdateTrackUnspecified MaintenanceWindowUpdateTrackEnum = "SQL_UPDATE_TRACK_UNSPECIFIED"
MaintenanceWindowUpdateTrackEnumCanary MaintenanceWindowUpdateTrackEnum = "canary"
MaintenanceWindowUpdateTrackEnumStable MaintenanceWindowUpdateTrackEnum = "stable"
)


type MaintenanceWindow struct {
    Day *int32 `json:"day,omitempty"`
    Hour *int32 `json:"hour,omitempty"`
    Kind *string `json:"kind,omitempty"`
    UpdateTrack *MaintenanceWindowUpdateTrackEnum `json:"updateTrack,omitempty"`
    
}

