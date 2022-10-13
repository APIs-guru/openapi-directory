package shared

type GeoPoint struct {
	Altitude  *float64 `json:"altitude"`
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}
