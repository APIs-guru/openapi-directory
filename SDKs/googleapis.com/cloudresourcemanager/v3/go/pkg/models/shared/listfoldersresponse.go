package shared

// ListFoldersResponse
// The ListFolders response message.
type ListFoldersResponse struct {
	Folders       []Folder `json:"folders,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
