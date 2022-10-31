package shared

type ListFoldersResponse struct {
	Folder        []Folder `json:"folder,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
