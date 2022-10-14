package shared

type ListDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	NextSyncToken *string  `json:"nextSyncToken,omitempty"`
	People        []Person `json:"people,omitempty"`
}
