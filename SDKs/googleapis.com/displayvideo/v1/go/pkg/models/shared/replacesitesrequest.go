package shared

// ReplaceSitesRequestInput
// Request message for SiteService.ReplaceSites.
type ReplaceSitesRequestInput struct {
	AdvertiserID *string     `json:"advertiserId,omitempty"`
	NewSites     []SiteInput `json:"newSites,omitempty"`
	PartnerID    *string     `json:"partnerId,omitempty"`
}
