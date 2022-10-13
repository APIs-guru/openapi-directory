package shared

type Image struct {
	Alpha      *float64              `json:"alpha"`
	Resolution *NormalizedCoordinate `json:"resolution"`
	URI        *string               `json:"uri"`
}
