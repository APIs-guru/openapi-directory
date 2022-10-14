package shared

type IterativeCalculationSettings struct {
	ConvergenceThreshold *float64 `json:"convergenceThreshold,omitempty"`
	MaxIterations        *int32   `json:"maxIterations,omitempty"`
}
