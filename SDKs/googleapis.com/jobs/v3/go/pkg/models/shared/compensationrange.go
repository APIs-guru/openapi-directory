package shared

type CompensationRange struct {
	MaxCompensation *Money `json:"maxCompensation"`
	MinCompensation *Money `json:"minCompensation"`
}
