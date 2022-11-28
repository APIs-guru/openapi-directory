package shared

// Position
// A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
type Position struct {
	X *float32 `json:"x,omitempty"`
	Y *float32 `json:"y,omitempty"`
	Z *float32 `json:"z,omitempty"`
}
