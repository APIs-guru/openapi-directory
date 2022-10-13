package shared

type ChannelResponse struct {
	ID              *string `json:"id"`
	IsBroadcastOnly *bool   `json:"isBroadcastOnly"`
	Title           *string `json:"title"`
}
