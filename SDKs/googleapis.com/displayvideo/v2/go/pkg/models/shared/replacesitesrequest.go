package shared

type ReplaceSitesRequest struct {
	AdvertiserID *string `json:"advertiserId"`
	NewSites     []Site  `json:"newSites"`
	PartnerID    *string `json:"partnerId"`
}
