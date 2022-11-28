package shared

// SearchFoldersResponse
// The response message for searching folders.
type SearchFoldersResponse struct {
	Folders       []Folder `json:"folders,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
