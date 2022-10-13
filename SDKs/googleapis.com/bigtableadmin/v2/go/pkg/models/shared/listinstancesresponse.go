package shared

type ListInstancesResponse struct {
	FailedLocations []string   `json:"failedLocations"`
	Instances       []Instance `json:"instances"`
	NextPageToken   *string    `json:"nextPageToken"`
}
