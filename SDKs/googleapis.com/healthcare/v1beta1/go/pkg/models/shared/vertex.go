package shared

// Vertex
// A 2D coordinate in an image. The origin is the top-left.
type Vertex struct {
	X *float32 `json:"x,omitempty"`
	Y *float32 `json:"y,omitempty"`
}
