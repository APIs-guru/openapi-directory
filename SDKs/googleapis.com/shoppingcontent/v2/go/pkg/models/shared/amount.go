package shared

type Amount struct {
	Pretax *Price `json:"pretax"`
	Tax    *Price `json:"tax"`
}
