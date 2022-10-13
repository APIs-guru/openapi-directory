package shared

type AccountsListLinksResponse struct {
	Kind          *string         `json:"kind"`
	Links         []LinkedAccount `json:"links"`
	NextPageToken *string         `json:"nextPageToken"`
}
