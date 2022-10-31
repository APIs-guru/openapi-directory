package shared



type DownloadAccountResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Users []UserInfo `json:"users,omitempty"`
    
}

