package shared

type UvIndexResult struct {
	FromTime string  `json:"from_time"`
	FromUv   float64 `json:"from_uv"`
	ToTime   string  `json:"to_time"`
	ToUv     float64 `json:"to_uv"`
}
