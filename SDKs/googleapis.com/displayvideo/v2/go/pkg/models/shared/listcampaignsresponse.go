package shared



type ListCampaignsResponse struct {
    Campaigns []Campaign `json:"campaigns,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

