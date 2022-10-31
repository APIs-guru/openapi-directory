package shared



type CampaignWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []Campaign `json:"results,omitempty"`
    
}

