package shared

// VideoPlayer
// Player to be used for a video playback.
type VideoPlayer struct {
	EmbedHeight *string `json:"embedHeight,omitempty"`
	EmbedHTML   *string `json:"embedHtml,omitempty"`
	EmbedWidth  *string `json:"embedWidth,omitempty"`
}
