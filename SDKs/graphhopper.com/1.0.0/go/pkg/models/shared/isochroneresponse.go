package shared

type IsochroneResponse struct {
	Copyrights []string                   `json:"copyrights"`
	Polygons   []IsochroneResponsePolygon `json:"polygons"`
}
