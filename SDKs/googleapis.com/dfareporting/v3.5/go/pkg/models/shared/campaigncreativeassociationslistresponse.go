package shared

type CampaignCreativeAssociationsListResponse struct {
	CampaignCreativeAssociations []CampaignCreativeAssociation `json:"campaignCreativeAssociations"`
	Kind                         *string                       `json:"kind"`
	NextPageToken                *string                       `json:"nextPageToken"`
}
