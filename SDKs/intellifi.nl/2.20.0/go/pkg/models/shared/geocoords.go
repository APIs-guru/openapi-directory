package shared

// GeoCoords
// Last known geolocation estimate of this object. Not guaranteed to be included in response.
type GeoCoords struct {
	Lat         *float64 `json:"lat,omitempty"`
	Lng         *float64 `json:"lng,omitempty"`
	TimeUpdated *string  `json:"time_updated,omitempty"`
}

// GeoCoordsInput
// Last known geolocation estimate of this object. Not guaranteed to be included in response.
type GeoCoordsInput struct {
	Lat *float64 `json:"lat,omitempty"`
	Lng *float64 `json:"lng,omitempty"`
}
