package shared

type GradientRule struct {
	Maxpoint *InterpolationPoint `json:"maxpoint"`
	Midpoint *InterpolationPoint `json:"midpoint"`
	Minpoint *InterpolationPoint `json:"minpoint"`
}
