package shared



type ReferenceImage struct {
    BoundingPolys []BoundingPoly `json:"boundingPolys,omitempty"`
    Name *string `json:"name,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

