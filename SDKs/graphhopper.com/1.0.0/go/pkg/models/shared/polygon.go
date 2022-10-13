package shared

type Polygon struct {
	Coordinates [][][]float64 `json:"coordinates"`
	Type        *string       `json:"type"`
}
