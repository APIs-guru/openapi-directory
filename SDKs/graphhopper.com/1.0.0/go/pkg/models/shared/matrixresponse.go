package shared

type MatrixResponseHints struct {
	Details           *string     `json:"details"`
	InvalidFromPoints []float64   `json:"invalid_from_points"`
	InvalidToPoints   []float64   `json:"invalid_to_points"`
	Message           *string     `json:"message"`
	PointPairs        [][]float64 `json:"point_pairs"`
}

type MatrixResponse struct {
	Distances [][]float64           `json:"distances"`
	Hints     []MatrixResponseHints `json:"hints"`
	Info      *ResponseInfo         `json:"info"`
	Times     [][]float64           `json:"times"`
	Weights   [][]float64           `json:"weights"`
}
