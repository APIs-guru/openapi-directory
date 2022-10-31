package shared



type ListConnectionProfilesResponse struct {
    ConnectionProfiles []ConnectionProfile `json:"connectionProfiles,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

