package shared

type ProtectionResult struct {
	Ozone     float64 `json:"ozone"`
	OzoneTime string  `json:"ozone_time"`
	Uv        float64 `json:"uv"`
	UvMax     float64 `json:"uv_max"`
	UvMaxTime string  `json:"uv_max_time"`
	UvTime    string  `json:"uv_time"`
}
