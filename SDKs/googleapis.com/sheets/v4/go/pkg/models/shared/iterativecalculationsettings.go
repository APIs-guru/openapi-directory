package shared

type IterativeCalculationSettings struct {
	ConvergenceThreshold *float64 `json:"convergenceThreshold"`
	MaxIterations        *int32   `json:"maxIterations"`
}
