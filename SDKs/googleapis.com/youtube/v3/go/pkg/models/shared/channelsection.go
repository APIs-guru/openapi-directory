package shared



type ChannelSection struct {
    ContentDetails *ChannelSectionContentDetails `json:"contentDetails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Localizations map[string]ChannelSectionLocalization `json:"localizations,omitempty"`
    Snippet *ChannelSectionSnippet `json:"snippet,omitempty"`
    Targeting *ChannelSectionTargeting `json:"targeting,omitempty"`
    
}

