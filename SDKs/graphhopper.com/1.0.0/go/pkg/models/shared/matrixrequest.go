package shared

type MatrixRequest struct {
	FailFast        *bool                 `json:"fail_fast,omitempty"`
	FromCurbsides   []string              `json:"from_curbsides,omitempty"`
	FromPointHints  []string              `json:"from_point_hints,omitempty"`
	FromPoints      [][]float64           `json:"from_points,omitempty"`
	OutArrays       []string              `json:"out_arrays,omitempty"`
	SnapPreventions []string              `json:"snap_preventions,omitempty"`
	ToCurbsides     []string              `json:"to_curbsides,omitempty"`
	ToPointHints    []string              `json:"to_point_hints,omitempty"`
	ToPoints        [][]float64           `json:"to_points,omitempty"`
	TurnCosts       *bool                 `json:"turn_costs,omitempty"`
	Vehicle         *VehicleProfileIDEnum `json:"vehicle,omitempty"`
}
