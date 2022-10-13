package shared

type Pose struct {
	AccuracyMeters              *float32 `json:"accuracyMeters"`
	Altitude                    *float64 `json:"altitude"`
	GpsRecordTimestampUnixEpoch *string  `json:"gpsRecordTimestampUnixEpoch"`
	Heading                     *float64 `json:"heading"`
	LatLngPair                  *LatLng  `json:"latLngPair"`
	Level                       *Level   `json:"level"`
	Pitch                       *float64 `json:"pitch"`
	Roll                        *float64 `json:"roll"`
}
