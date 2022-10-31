package shared



type LiasettingsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []LiaSettings `json:"resources,omitempty"`
    
}

