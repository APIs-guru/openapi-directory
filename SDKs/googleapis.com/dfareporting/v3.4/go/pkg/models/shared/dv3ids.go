package shared

// Dv3Ids
// DV360 IDs related to the custom event.
type Dv3Ids struct {
	DvCampaignID       *string `json:"dvCampaignId,omitempty"`
	DvCreativeID       *string `json:"dvCreativeId,omitempty"`
	DvInsertionOrderID *string `json:"dvInsertionOrderId,omitempty"`
	DvLineItemID       *string `json:"dvLineItemId,omitempty"`
	DvSiteID           *string `json:"dvSiteId,omitempty"`
	Kind               *string `json:"kind,omitempty"`
}
