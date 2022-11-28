package shared

// VideoItem
// An item containing a video.
type VideoItem struct {
	Caption *string `json:"caption,omitempty"`
	Video   *Video  `json:"video,omitempty"`
}
