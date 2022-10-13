package shared

type ChannelGrouping struct {
	FallbackName *string               `json:"fallbackName"`
	Kind         *string               `json:"kind"`
	Name         *string               `json:"name"`
	Rules        []ChannelGroupingRule `json:"rules"`
}
