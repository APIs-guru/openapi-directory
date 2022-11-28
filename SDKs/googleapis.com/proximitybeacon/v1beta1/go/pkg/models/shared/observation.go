package shared

// Observation
// Represents one beacon observed once.
type Observation struct {
	AdvertisedID *AdvertisedID `json:"advertisedId,omitempty"`
	Telemetry    *string       `json:"telemetry,omitempty"`
	TimestampMs  *string       `json:"timestampMs,omitempty"`
}
