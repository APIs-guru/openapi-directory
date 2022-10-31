package shared




type ThirdPartyLinkSnippetTypeEnum string

const (
    ThirdPartyLinkSnippetTypeEnumLinkUnspecified ThirdPartyLinkSnippetTypeEnum = "linkUnspecified"
ThirdPartyLinkSnippetTypeEnumChannelToStoreLink ThirdPartyLinkSnippetTypeEnum = "channelToStoreLink"
)


type ThirdPartyLinkSnippet struct {
    ChannelToStoreLink *ChannelToStoreLinkDetails `json:"channelToStoreLink,omitempty"`
    Type *ThirdPartyLinkSnippetTypeEnum `json:"type,omitempty"`
    
}

