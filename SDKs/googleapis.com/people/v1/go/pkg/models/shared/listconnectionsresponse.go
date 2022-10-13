package shared

type ListConnectionsResponse struct {
	Connections   []Person `json:"connections"`
	NextPageToken *string  `json:"nextPageToken"`
	NextSyncToken *string  `json:"nextSyncToken"`
	TotalItems    *int32   `json:"totalItems"`
	TotalPeople   *int32   `json:"totalPeople"`
}
