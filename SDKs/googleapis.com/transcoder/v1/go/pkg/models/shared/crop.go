package shared

type Crop struct {
	BottomPixels *int32 `json:"bottomPixels"`
	LeftPixels   *int32 `json:"leftPixels"`
	RightPixels  *int32 `json:"rightPixels"`
	TopPixels    *int32 `json:"topPixels"`
}
