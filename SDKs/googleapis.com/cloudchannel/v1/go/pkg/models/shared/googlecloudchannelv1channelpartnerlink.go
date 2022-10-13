package shared

type GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum string

const (
	GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumChannelPartnerLinkStateUnspecified GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"
	GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumInvited                            GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "INVITED"
	GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumActive                             GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "ACTIVE"
	GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumRevoked                            GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "REVOKED"
	GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnumSuspended                          GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = "SUSPENDED"
)

type GoogleCloudChannelV1ChannelPartnerLink struct {
	ChannelPartnerCloudIdentityInfo *GoogleCloudChannelV1CloudIdentityInfo               `json:"channelPartnerCloudIdentityInfo"`
	CreateTime                      *string                                              `json:"createTime"`
	InviteLinkURI                   *string                                              `json:"inviteLinkUri"`
	LinkState                       *GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum `json:"linkState"`
	Name                            *string                                              `json:"name"`
	PublicID                        *string                                              `json:"publicId"`
	ResellerCloudIdentityID         *string                                              `json:"resellerCloudIdentityId"`
	UpdateTime                      *string                                              `json:"updateTime"`
}
