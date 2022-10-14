package shared

type MatrixResponseHints struct {
	Details           *string     `json:"details,omitempty"`
	InvalidFromPoints []float64   `json:"invalid_from_points,omitempty"`
	InvalidToPoints   []float64   `json:"invalid_to_points,omitempty"`
	Message           *string     `json:"message,omitempty"`
	PointPairs        [][]float64 `json:"point_pairs,omitempty"`
}

type MatrixResponse struct {
	Distances [][]float64           `json:"distances,omitempty"`
	Hints     []MatrixResponseHints `json:"hints,omitempty"`
	Info      *ResponseInfo         `json:"info,omitempty"`
	Times     [][]float64           `json:"times,omitempty"`
	Weights   [][]float64           `json:"weights,omitempty"`
}
