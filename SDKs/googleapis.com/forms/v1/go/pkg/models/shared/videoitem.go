package shared

type VideoItem struct {
	Caption *string `json:"caption"`
	Video   *Video  `json:"video"`
}
