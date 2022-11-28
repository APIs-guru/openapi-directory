package shared

// ListFoldersResponse
// List Folders Response.
type ListFoldersResponse struct {
	Folder        []Folder `json:"folder,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
