package shared

type Region struct {
	Height *float32 `json:"height,omitempty"`
	Left   *float32 `json:"left,omitempty"`
	TagID  *string  `json:"tagId,omitempty"`
	Top    *float32 `json:"top,omitempty"`
	Width  *float32 `json:"width,omitempty"`
}
