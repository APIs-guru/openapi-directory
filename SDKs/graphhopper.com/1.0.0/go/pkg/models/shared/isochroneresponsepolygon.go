package shared

type IsochroneResponsePolygonProperties struct {
	Bucket *int32 `json:"bucket"`
}

type IsochroneResponsePolygon struct {
	Geometry   *Polygon                            `json:"geometry"`
	Properties *IsochroneResponsePolygonProperties `json:"properties"`
	Type       *string                             `json:"type"`
}
