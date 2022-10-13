package shared

type CropProperties struct {
	Angle        *float32 `json:"angle"`
	OffsetBottom *float32 `json:"offsetBottom"`
	OffsetLeft   *float32 `json:"offsetLeft"`
	OffsetRight  *float32 `json:"offsetRight"`
	OffsetTop    *float32 `json:"offsetTop"`
}
