package shared



type Pose struct {
    AccuracyMeters *float32 `json:"accuracyMeters,omitempty"`
    Altitude *float64 `json:"altitude,omitempty"`
    GpsRecordTimestampUnixEpoch *string `json:"gpsRecordTimestampUnixEpoch,omitempty"`
    Heading *float64 `json:"heading,omitempty"`
    LatLngPair *LatLng `json:"latLngPair,omitempty"`
    Level *Level `json:"level,omitempty"`
    Pitch *float64 `json:"pitch,omitempty"`
    Roll *float64 `json:"roll,omitempty"`
    
}

