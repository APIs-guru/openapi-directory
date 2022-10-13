package shared

type SearchDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	People        []Person `json:"people"`
	TotalSize     *int32   `json:"totalSize"`
}
