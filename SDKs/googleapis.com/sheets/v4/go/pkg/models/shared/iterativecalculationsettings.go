package shared

// IterativeCalculationSettings
// Settings to control how circular dependencies are resolved with iterative calculation.
type IterativeCalculationSettings struct {
	ConvergenceThreshold *float64 `json:"convergenceThreshold,omitempty"`
	MaxIterations        *int32   `json:"maxIterations,omitempty"`
}
