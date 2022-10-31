package shared




type GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum string

const (
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumChannelPartnerLinkStateUnspecified GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"
GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumInvited GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "INVITED"
GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumActive GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "ACTIVE"
GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumRevoked GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "REVOKED"
GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumSuspended GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "SUSPENDED"
)


type GoogleCloudChannelV1ChannelPartnerLink struct {
    ChannelPartnerCloudIdentityInfo *GoogleCloudChannelV1CloudIdentityInfo `json:"channelPartnerCloudIdentityInfo,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    InviteLinkURI *string `json:"inviteLinkUri,omitempty"`
    LinkState *GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum `json:"linkState,omitempty"`
    Name *string `json:"name,omitempty"`
    PublicID *string `json:"publicId,omitempty"`
    ResellerCloudIdentityID *string `json:"resellerCloudIdentityId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

