package shared

type CampaignsListResponse struct {
	Campaigns     []Campaign `json:"campaigns"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
