package shared

// VideoLink
// Link to a video.
type VideoLink struct {
	DisplayText *string `json:"displayText,omitempty"`
	YoutubeURI  *string `json:"youtubeUri,omitempty"`
}
