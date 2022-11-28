package shared

// DownloadAccountResponse
// Response of downloading accounts in batch.
type DownloadAccountResponse struct {
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Users         []UserInfo `json:"users,omitempty"`
}
