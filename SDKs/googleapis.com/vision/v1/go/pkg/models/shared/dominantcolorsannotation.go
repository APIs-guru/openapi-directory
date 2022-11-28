package shared

// DominantColorsAnnotation
// Set of dominant colors and their corresponding scores.
type DominantColorsAnnotation struct {
	Colors []ColorInfo `json:"colors,omitempty"`
}
