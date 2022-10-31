package shared



type ColorInfo struct {
    Color *Color `json:"color,omitempty"`
    PixelFraction *float32 `json:"pixelFraction,omitempty"`
    Score *float32 `json:"score,omitempty"`
    
}

