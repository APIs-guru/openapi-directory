package shared

type IsochroneResponsePolygonProperties struct {
	Bucket *int32 `json:"bucket,omitempty"`
}

// IsochroneResponsePolygon
// A found path
type IsochroneResponsePolygon struct {
	Geometry   *Polygon                            `json:"geometry,omitempty"`
	Properties *IsochroneResponsePolygonProperties `json:"properties,omitempty"`
	Type       *string                             `json:"type,omitempty"`
}
