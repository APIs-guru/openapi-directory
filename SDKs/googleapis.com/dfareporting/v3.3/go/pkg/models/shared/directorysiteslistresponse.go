package shared



type DirectorySitesListResponse struct {
    DirectorySites []DirectorySite `json:"directorySites,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

