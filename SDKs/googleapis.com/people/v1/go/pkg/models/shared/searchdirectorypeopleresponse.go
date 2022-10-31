package shared

type SearchDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	People        []Person `json:"people,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
