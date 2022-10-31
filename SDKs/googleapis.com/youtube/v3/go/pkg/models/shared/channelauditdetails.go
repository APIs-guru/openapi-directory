package shared



type ChannelAuditDetails struct {
    CommunityGuidelinesGoodStanding *bool `json:"communityGuidelinesGoodStanding,omitempty"`
    ContentIDClaimsGoodStanding *bool `json:"contentIdClaimsGoodStanding,omitempty"`
    CopyrightStrikesGoodStanding *bool `json:"copyrightStrikesGoodStanding,omitempty"`
    
}

