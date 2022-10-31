package shared



type ReplaceSitesRequest struct {
    AdvertiserID *string `json:"advertiserId,omitempty"`
    NewSites []Site `json:"newSites,omitempty"`
    PartnerID *string `json:"partnerId,omitempty"`
    
}

