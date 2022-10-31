package shared

type Video struct {
	Properties *MediaProperties `json:"properties,omitempty"`
	YoutubeURI *string          `json:"youtubeUri,omitempty"`
}
