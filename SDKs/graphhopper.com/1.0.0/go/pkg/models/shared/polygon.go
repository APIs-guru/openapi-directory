package shared

type Polygon struct {
	Coordinates [][][]float64 `json:"coordinates,omitempty"`
	Type        *string       `json:"type,omitempty"`
}
