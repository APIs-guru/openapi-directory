package shared



type FloodlightActivityGroupsListResponse struct {
    FloodlightActivityGroups []FloodlightActivityGroup `json:"floodlightActivityGroups,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

