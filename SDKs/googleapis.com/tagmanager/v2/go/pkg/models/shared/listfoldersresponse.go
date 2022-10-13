package shared

type ListFoldersResponse struct {
	Folder        []Folder `json:"folder"`
	NextPageToken *string  `json:"nextPageToken"`
}
