package shared

type MatrixRequest struct {
	FailFast        *bool                 `json:"fail_fast"`
	FromCurbsides   []string              `json:"from_curbsides"`
	FromPointHints  []string              `json:"from_point_hints"`
	FromPoints      [][]float64           `json:"from_points"`
	OutArrays       []string              `json:"out_arrays"`
	SnapPreventions []string              `json:"snap_preventions"`
	ToCurbsides     []string              `json:"to_curbsides"`
	ToPointHints    []string              `json:"to_point_hints"`
	ToPoints        [][]float64           `json:"to_points"`
	TurnCosts       *bool                 `json:"turn_costs"`
	Vehicle         *VehicleProfileIDEnum `json:"vehicle"`
}
