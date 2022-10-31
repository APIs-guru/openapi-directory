package shared

type Forecast struct {
	Uv     float64 `json:"uv"`
	UvTime string  `json:"uv_time"`
}
