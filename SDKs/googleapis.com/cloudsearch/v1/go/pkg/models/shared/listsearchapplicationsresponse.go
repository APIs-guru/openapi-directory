package shared

type ListSearchApplicationsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	SearchApplications []SearchApplication `json:"searchApplications"`
}
