package shared

// MetricMatrix
// A message representing a matrix of floats.
type MetricMatrix struct {
	Rows []MetricMatrixRow `json:"rows,omitempty"`
}
