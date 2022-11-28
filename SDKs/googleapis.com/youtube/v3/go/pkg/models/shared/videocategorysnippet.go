package shared

// VideoCategorySnippet
// Basic details about a video category, such as its localized title.
type VideoCategorySnippet struct {
	Assignable *bool   `json:"assignable,omitempty"`
	ChannelID  *string `json:"channelId,omitempty"`
	Title      *string `json:"title,omitempty"`
}
