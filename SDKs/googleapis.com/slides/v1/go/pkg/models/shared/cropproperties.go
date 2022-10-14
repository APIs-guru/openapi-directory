package shared

type CropProperties struct {
	Angle        *float32 `json:"angle,omitempty"`
	BottomOffset *float32 `json:"bottomOffset,omitempty"`
	LeftOffset   *float32 `json:"leftOffset,omitempty"`
	RightOffset  *float32 `json:"rightOffset,omitempty"`
	TopOffset    *float32 `json:"topOffset,omitempty"`
}
