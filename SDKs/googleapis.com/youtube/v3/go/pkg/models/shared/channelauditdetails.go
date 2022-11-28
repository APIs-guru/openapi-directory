package shared

// ChannelAuditDetails
// The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
type ChannelAuditDetails struct {
	CommunityGuidelinesGoodStanding *bool `json:"communityGuidelinesGoodStanding,omitempty"`
	ContentIDClaimsGoodStanding     *bool `json:"contentIdClaimsGoodStanding,omitempty"`
	CopyrightStrikesGoodStanding    *bool `json:"copyrightStrikesGoodStanding,omitempty"`
}
