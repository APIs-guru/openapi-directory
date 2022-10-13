package shared

type ChannelGrouping struct {
	FallbackName *string `json:"fallbackName"`
	Name         *string `json:"name"`
	Rules        []Rule  `json:"rules"`
}
