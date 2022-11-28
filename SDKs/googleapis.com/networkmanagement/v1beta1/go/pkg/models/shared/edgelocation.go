package shared

// EdgeLocation
// Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
type EdgeLocation struct {
	MetropolitanArea *string `json:"metropolitanArea,omitempty"`
}
