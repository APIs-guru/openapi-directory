package shared

// GoogleCloudDocumentaiV1beta2NormalizedVertex
// A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
type GoogleCloudDocumentaiV1beta2NormalizedVertex struct {
	X *float32 `json:"x,omitempty"`
	Y *float32 `json:"y,omitempty"`
}
