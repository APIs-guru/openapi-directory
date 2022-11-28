package shared

// Video
// Data representing a video.
type Video struct {
	Properties *MediaProperties `json:"properties,omitempty"`
	YoutubeURI *string          `json:"youtubeUri,omitempty"`
}
