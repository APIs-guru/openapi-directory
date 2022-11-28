package shared

// GoogleCloudDataplexV1ListLakesResponse
// List lakes response.
type GoogleCloudDataplexV1ListLakesResponse struct {
	Lakes                []GoogleCloudDataplexV1Lake `json:"lakes,omitempty"`
	NextPageToken        *string                     `json:"nextPageToken,omitempty"`
	UnreachableLocations []string                    `json:"unreachableLocations,omitempty"`
}
