package shared

type GradientRule struct {
	Maxpoint *InterpolationPoint `json:"maxpoint,omitempty"`
	Midpoint *InterpolationPoint `json:"midpoint,omitempty"`
	Minpoint *InterpolationPoint `json:"minpoint,omitempty"`
}
