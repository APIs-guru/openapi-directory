package shared

type SymmetricalMatrixRequest struct {
	Curbsides       []string              `json:"curbsides,omitempty"`
	FailFast        *bool                 `json:"fail_fast,omitempty"`
	OutArrays       []string              `json:"out_arrays,omitempty"`
	PointHints      []string              `json:"point_hints,omitempty"`
	Points          [][]float64           `json:"points,omitempty"`
	SnapPreventions []string              `json:"snap_preventions,omitempty"`
	TurnCosts       *bool                 `json:"turn_costs,omitempty"`
	Vehicle         *VehicleProfileIDEnum `json:"vehicle,omitempty"`
}
