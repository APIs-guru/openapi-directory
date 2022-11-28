package shared

// CampaignCreativeAssociationsListResponse
// Campaign Creative Association List Response
type CampaignCreativeAssociationsListResponse struct {
	CampaignCreativeAssociations []CampaignCreativeAssociation `json:"campaignCreativeAssociations,omitempty"`
	Kind                         *string                       `json:"kind,omitempty"`
	NextPageToken                *string                       `json:"nextPageToken,omitempty"`
}
