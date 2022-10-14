package shared

type Observation struct {
	AdvertisedID *AdvertisedID `json:"advertisedId,omitempty"`
	Telemetry    *string       `json:"telemetry,omitempty"`
	TimestampMs  *string       `json:"timestampMs,omitempty"`
}
