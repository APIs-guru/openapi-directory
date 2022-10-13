package shared

type ListAvailableVersionsResponse struct {
	AvailableVersions []Version `json:"availableVersions"`
	NextPageToken     *string   `json:"nextPageToken"`
}
