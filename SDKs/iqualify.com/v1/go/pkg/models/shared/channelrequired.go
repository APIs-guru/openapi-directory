package shared

type ChannelRequired struct {
	IsBroadcastOnly *bool  `json:"isBroadcastOnly"`
	Title           string `json:"title"`
}
