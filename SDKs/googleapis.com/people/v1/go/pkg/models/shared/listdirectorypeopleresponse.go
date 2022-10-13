package shared

type ListDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	NextSyncToken *string  `json:"nextSyncToken"`
	People        []Person `json:"people"`
}
