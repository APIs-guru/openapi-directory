package shared

type BulkEditSitesRequest struct {
	AdvertiserID *string  `json:"advertiserId"`
	CreatedSites []Site   `json:"createdSites"`
	DeletedSites []string `json:"deletedSites"`
	PartnerID    *string  `json:"partnerId"`
}
