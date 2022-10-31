package shared

type GoogleCloudVisionV1p1beta1ColorInfo struct {
	Color         *Color   `json:"color,omitempty"`
	PixelFraction *float32 `json:"pixelFraction,omitempty"`
	Score         *float32 `json:"score,omitempty"`
}
