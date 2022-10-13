package shared

type ListCampaignsResponse struct {
	Campaigns     []Campaign `json:"campaigns"`
	NextPageToken *string    `json:"nextPageToken"`
}
