package shared



type BoundingPoly struct {
    Label *string `json:"label,omitempty"`
    Vertices []Vertex `json:"vertices,omitempty"`
    
}

