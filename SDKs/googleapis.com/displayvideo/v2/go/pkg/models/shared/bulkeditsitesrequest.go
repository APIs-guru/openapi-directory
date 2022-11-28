package shared

// BulkEditSitesRequestInput
// Request message for SiteService.BulkEditSites.
type BulkEditSitesRequestInput struct {
	AdvertiserID *string     `json:"advertiserId,omitempty"`
	CreatedSites []SiteInput `json:"createdSites,omitempty"`
	DeletedSites []string    `json:"deletedSites,omitempty"`
	PartnerID    *string     `json:"partnerId,omitempty"`
}
