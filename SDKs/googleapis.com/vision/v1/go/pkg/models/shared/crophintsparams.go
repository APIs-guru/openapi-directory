package shared

// CropHintsParams
// Parameters for crop hints annotation request.
type CropHintsParams struct {
	AspectRatios []float32 `json:"aspectRatios,omitempty"`
}
