package shared

type ThirdPartyLinkSnippetTypeEnum string

const (
	ThirdPartyLinkSnippetTypeEnumLinkUnspecified    ThirdPartyLinkSnippetTypeEnum = "linkUnspecified"
	ThirdPartyLinkSnippetTypeEnumChannelToStoreLink ThirdPartyLinkSnippetTypeEnum = "channelToStoreLink"
)

// ThirdPartyLinkSnippet
// Basic information about a third party account link, including its type and type-specific information.
type ThirdPartyLinkSnippet struct {
	ChannelToStoreLink *ChannelToStoreLinkDetails     `json:"channelToStoreLink,omitempty"`
	Type               *ThirdPartyLinkSnippetTypeEnum `json:"type,omitempty"`
}
