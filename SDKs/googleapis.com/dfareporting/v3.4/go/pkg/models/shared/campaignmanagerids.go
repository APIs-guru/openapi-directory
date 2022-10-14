package shared

type CampaignManagerIds struct {
	AdID        *string `json:"adId,omitempty"`
	CampaignID  *string `json:"campaignId,omitempty"`
	CreativeID  *string `json:"creativeId,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	PlacementID *string `json:"placementId,omitempty"`
	SiteID      *string `json:"siteId,omitempty"`
}
