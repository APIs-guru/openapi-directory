package shared



type QueryDriveActivityResponse struct {
    Activities []DriveActivity `json:"activities,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

