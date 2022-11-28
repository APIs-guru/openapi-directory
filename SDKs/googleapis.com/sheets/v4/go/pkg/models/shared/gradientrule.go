package shared

// GradientRule
// A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
type GradientRule struct {
	Maxpoint *InterpolationPoint `json:"maxpoint,omitempty"`
	Midpoint *InterpolationPoint `json:"midpoint,omitempty"`
	Minpoint *InterpolationPoint `json:"minpoint,omitempty"`
}
