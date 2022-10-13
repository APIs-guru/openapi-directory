package shared

type ChannelGroup struct {
	AutoAssign *bool `json:"autoAssign"`
}

type Channel struct {
	Group           *ChannelGroup `json:"group"`
	GroupDiscussion *bool         `json:"groupDiscussion"`
	IsBroadcastOnly *bool         `json:"isBroadcastOnly"`
	PrivateSupport  *bool         `json:"privateSupport"`
	Title           *string       `json:"title"`
}
