package shared

// WeightedFontFamily
// Represents a font family and weight used to style a TextRun.
type WeightedFontFamily struct {
	FontFamily *string `json:"fontFamily,omitempty"`
	Weight     *int32  `json:"weight,omitempty"`
}
