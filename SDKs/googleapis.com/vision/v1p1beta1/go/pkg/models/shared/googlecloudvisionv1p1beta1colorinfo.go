package shared

// GoogleCloudVisionV1p1beta1ColorInfo
// Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
type GoogleCloudVisionV1p1beta1ColorInfo struct {
	Color         *Color   `json:"color,omitempty"`
	PixelFraction *float32 `json:"pixelFraction,omitempty"`
	Score         *float32 `json:"score,omitempty"`
}
