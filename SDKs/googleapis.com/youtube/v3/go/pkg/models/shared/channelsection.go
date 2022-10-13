package shared

type ChannelSection struct {
	ContentDetails *ChannelSectionContentDetails         `json:"contentDetails"`
	Etag           *string                               `json:"etag"`
	ID             *string                               `json:"id"`
	Kind           *string                               `json:"kind"`
	Localizations  map[string]ChannelSectionLocalization `json:"localizations"`
	Snippet        *ChannelSectionSnippet                `json:"snippet"`
	Targeting      *ChannelSectionTargeting              `json:"targeting"`
}
