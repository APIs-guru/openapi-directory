package shared

type GoogleCloudVisionV1p1beta1ColorInfo struct {
	Color         *Color   `json:"color"`
	PixelFraction *float32 `json:"pixelFraction"`
	Score         *float32 `json:"score"`
}
