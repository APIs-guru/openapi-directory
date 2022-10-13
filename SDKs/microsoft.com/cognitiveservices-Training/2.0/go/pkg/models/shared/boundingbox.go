package shared

type BoundingBox struct {
	Height *float32 `json:"height"`
	Left   *float32 `json:"left"`
	Top    *float32 `json:"top"`
	Width  *float32 `json:"width"`
}
