package shared



type IsochroneResponse struct {
    Copyrights []string `json:"copyrights,omitempty"`
    Polygons []IsochroneResponsePolygon `json:"polygons,omitempty"`
    
}

