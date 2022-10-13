package shared

type GoogleCloudDataplexV1ListLakesResponse struct {
	Lakes                []GoogleCloudDataplexV1Lake `json:"lakes"`
	NextPageToken        *string                     `json:"nextPageToken"`
	UnreachableLocations []string                    `json:"unreachableLocations"`
}
