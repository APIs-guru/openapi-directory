package shared

type GeoCoords struct {
	Lat         *float64 `json:"lat,omitempty"`
	Lng         *float64 `json:"lng,omitempty"`
	TimeUpdated *string  `json:"time_updated,omitempty"`
}
