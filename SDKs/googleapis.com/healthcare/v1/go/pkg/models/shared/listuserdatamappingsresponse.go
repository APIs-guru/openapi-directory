package shared



type ListUserDataMappingsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UserDataMappings []UserDataMapping `json:"userDataMappings,omitempty"`
    
}

