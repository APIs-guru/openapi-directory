package shared

type Color struct {
	Brightness *float64 `json:"brightness"`
	Contrast   *float64 `json:"contrast"`
	Saturation *float64 `json:"saturation"`
}
