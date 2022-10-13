package shared

type CropProperties struct {
	Angle        *float32 `json:"angle"`
	BottomOffset *float32 `json:"bottomOffset"`
	LeftOffset   *float32 `json:"leftOffset"`
	RightOffset  *float32 `json:"rightOffset"`
	TopOffset    *float32 `json:"topOffset"`
}
