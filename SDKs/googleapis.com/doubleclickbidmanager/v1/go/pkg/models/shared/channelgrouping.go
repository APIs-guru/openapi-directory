package shared

type ChannelGrouping struct {
	FallbackName *string `json:"fallbackName,omitempty"`
	Name         *string `json:"name,omitempty"`
	Rules        []Rule  `json:"rules,omitempty"`
}
