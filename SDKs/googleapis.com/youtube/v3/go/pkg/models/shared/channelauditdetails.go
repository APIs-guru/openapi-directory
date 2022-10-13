package shared

type ChannelAuditDetails struct {
	CommunityGuidelinesGoodStanding *bool `json:"communityGuidelinesGoodStanding"`
	ContentIDClaimsGoodStanding     *bool `json:"contentIdClaimsGoodStanding"`
	CopyrightStrikesGoodStanding    *bool `json:"copyrightStrikesGoodStanding"`
}
