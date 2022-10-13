package shared

type SymmetricalMatrixRequest struct {
	Curbsides       []string              `json:"curbsides"`
	FailFast        *bool                 `json:"fail_fast"`
	OutArrays       []string              `json:"out_arrays"`
	PointHints      []string              `json:"point_hints"`
	Points          [][]float64           `json:"points"`
	SnapPreventions []string              `json:"snap_preventions"`
	TurnCosts       *bool                 `json:"turn_costs"`
	Vehicle         *VehicleProfileIDEnum `json:"vehicle"`
}
