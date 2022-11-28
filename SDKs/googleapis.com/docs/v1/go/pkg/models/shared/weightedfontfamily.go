package shared

// WeightedFontFamily
// Represents a font family and weight of text.
type WeightedFontFamily struct {
	FontFamily *string `json:"fontFamily,omitempty"`
	Weight     *int32  `json:"weight,omitempty"`
}
