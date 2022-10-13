package shared

type ForecastOptimalParametersResponse struct {
	Alpha *float64 `json:"alpha"`
	Beta  *float64 `json:"beta"`
	Gamma *float64 `json:"gamma"`
}
