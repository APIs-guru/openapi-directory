package shared

// MetricMatrixRow
// A message representing a row of a matrix of floats.
type MetricMatrixRow struct {
	Cols []float32 `json:"cols,omitempty"`
}
