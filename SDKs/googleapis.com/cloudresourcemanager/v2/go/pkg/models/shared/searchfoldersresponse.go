package shared

type SearchFoldersResponse struct {
	Folders       []Folder `json:"folders"`
	NextPageToken *string  `json:"nextPageToken"`
}
