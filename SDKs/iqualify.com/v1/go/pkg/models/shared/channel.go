package shared

type ChannelGroup struct {
	AutoAssign *bool `json:"autoAssign,omitempty"`
}

type Channel struct {
	Group           *ChannelGroup `json:"group,omitempty"`
	GroupDiscussion *bool         `json:"groupDiscussion,omitempty"`
	IsBroadcastOnly *bool         `json:"isBroadcastOnly,omitempty"`
	PrivateSupport  *bool         `json:"privateSupport,omitempty"`
	Title           *string       `json:"title,omitempty"`
}
