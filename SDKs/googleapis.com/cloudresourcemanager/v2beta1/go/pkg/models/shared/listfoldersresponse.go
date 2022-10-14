package shared

type ListFoldersResponse struct {
	Folders       []Folder `json:"folders,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
