package shared

type ColorInfo struct {
	Color         *Color   `json:"color"`
	PixelFraction *float32 `json:"pixelFraction"`
	Score         *float32 `json:"score"`
}
