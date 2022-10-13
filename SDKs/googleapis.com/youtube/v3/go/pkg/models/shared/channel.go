package shared

type Channel struct {
	AuditDetails        *ChannelAuditDetails           `json:"auditDetails"`
	BrandingSettings    *ChannelBrandingSettings       `json:"brandingSettings"`
	ContentDetails      *ChannelContentDetails         `json:"contentDetails"`
	ContentOwnerDetails *ChannelContentOwnerDetails    `json:"contentOwnerDetails"`
	ConversionPings     *ChannelConversionPings        `json:"conversionPings"`
	Etag                *string                        `json:"etag"`
	ID                  *string                        `json:"id"`
	Kind                *string                        `json:"kind"`
	Localizations       map[string]ChannelLocalization `json:"localizations"`
	Snippet             *ChannelSnippet                `json:"snippet"`
	Statistics          *ChannelStatistics             `json:"statistics"`
	Status              *ChannelStatus                 `json:"status"`
	TopicDetails        *ChannelTopicDetails           `json:"topicDetails"`
}
