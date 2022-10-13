package shared

type ListFoldersResponse struct {
	Folders       []Folder `json:"folders"`
	NextPageToken *string  `json:"nextPageToken"`
}
