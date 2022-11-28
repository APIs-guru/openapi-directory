package shared

// ImageProperties
// Stores image properties, such as dominant colors.
type ImageProperties struct {
	DominantColors *DominantColorsAnnotation `json:"dominantColors,omitempty"`
}
