package shared

// GeoCoordsReadOnly
// Last known geolocation estimate of this object. Not guaranteed to be included in response.
type GeoCoordsReadOnly struct {
	Lat         *float64 `json:"lat,omitempty"`
	Lng         *float64 `json:"lng,omitempty"`
	TimeUpdated *string  `json:"time_updated,omitempty"`
}
