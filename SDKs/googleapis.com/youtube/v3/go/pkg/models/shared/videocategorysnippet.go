package shared

type VideoCategorySnippet struct {
	Assignable *bool   `json:"assignable"`
	ChannelID  *string `json:"channelId"`
	Title      *string `json:"title"`
}
