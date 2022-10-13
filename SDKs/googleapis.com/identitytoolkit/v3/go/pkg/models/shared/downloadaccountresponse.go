package shared

type DownloadAccountResponse struct {
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
	Users         []UserInfo `json:"users"`
}
