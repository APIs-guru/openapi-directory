package shared



type BulkEditSitesRequest struct {
    AdvertiserID *string `json:"advertiserId,omitempty"`
    CreatedSites []Site `json:"createdSites,omitempty"`
    DeletedSites []string `json:"deletedSites,omitempty"`
    PartnerID *string `json:"partnerId,omitempty"`
    
}

