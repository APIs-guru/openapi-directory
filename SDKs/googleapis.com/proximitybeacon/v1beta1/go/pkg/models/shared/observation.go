package shared

type Observation struct {
	AdvertisedID *AdvertisedID `json:"advertisedId"`
	Telemetry    *string       `json:"telemetry"`
	TimestampMs  *string       `json:"timestampMs"`
}
