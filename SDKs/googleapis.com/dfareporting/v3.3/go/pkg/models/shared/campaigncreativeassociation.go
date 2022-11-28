package shared

// CampaignCreativeAssociation
// Identifies a creative which has been associated with a given campaign.
type CampaignCreativeAssociation struct {
	CreativeID *string `json:"creativeId,omitempty"`
	Kind       *string `json:"kind,omitempty"`
}
