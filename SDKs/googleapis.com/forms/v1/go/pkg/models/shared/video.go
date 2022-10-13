package shared

type Video struct {
	Properties *MediaProperties `json:"properties"`
	YoutubeURI *string          `json:"youtubeUri"`
}
