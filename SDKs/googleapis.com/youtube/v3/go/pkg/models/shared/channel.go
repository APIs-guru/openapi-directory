package shared

// Channel
// A *channel* resource contains information about a YouTube channel.
type Channel struct {
	AuditDetails        *ChannelAuditDetails           `json:"auditDetails,omitempty"`
	BrandingSettings    *ChannelBrandingSettings       `json:"brandingSettings,omitempty"`
	ContentDetails      *ChannelContentDetails         `json:"contentDetails,omitempty"`
	ContentOwnerDetails *ChannelContentOwnerDetails    `json:"contentOwnerDetails,omitempty"`
	ConversionPings     *ChannelConversionPings        `json:"conversionPings,omitempty"`
	Etag                *string                        `json:"etag,omitempty"`
	ID                  *string                        `json:"id,omitempty"`
	Kind                *string                        `json:"kind,omitempty"`
	Localizations       map[string]ChannelLocalization `json:"localizations,omitempty"`
	Snippet             *ChannelSnippet                `json:"snippet,omitempty"`
	Statistics          *ChannelStatistics             `json:"statistics,omitempty"`
	Status              *ChannelStatus                 `json:"status,omitempty"`
	TopicDetails        *ChannelTopicDetails           `json:"topicDetails,omitempty"`
}
