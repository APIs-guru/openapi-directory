package shared



type CampaignsListResponse struct {
    Campaigns []Campaign `json:"campaigns,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

