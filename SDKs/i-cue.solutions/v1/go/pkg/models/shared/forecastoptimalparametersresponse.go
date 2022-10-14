package shared

type ForecastOptimalParametersResponse struct {
	Alpha *float64 `json:"alpha,omitempty"`
	Beta  *float64 `json:"beta,omitempty"`
	Gamma *float64 `json:"gamma,omitempty"`
}
