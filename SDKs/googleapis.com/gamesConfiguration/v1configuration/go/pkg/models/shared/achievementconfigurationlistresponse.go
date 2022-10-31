package shared



type AchievementConfigurationListResponse struct {
    Items []AchievementConfiguration `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

