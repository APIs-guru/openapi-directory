package shared

type GoogleCloudDataplexV1ListTasksResponse struct {
	NextPageToken        *string                     `json:"nextPageToken"`
	Tasks                []GoogleCloudDataplexV1Task `json:"tasks"`
	UnreachableLocations []string                    `json:"unreachableLocations"`
}
