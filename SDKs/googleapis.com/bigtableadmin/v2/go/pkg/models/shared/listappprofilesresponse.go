package shared



type ListAppProfilesResponse struct {
    AppProfiles []AppProfile `json:"appProfiles,omitempty"`
    FailedLocations []string `json:"failedLocations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

