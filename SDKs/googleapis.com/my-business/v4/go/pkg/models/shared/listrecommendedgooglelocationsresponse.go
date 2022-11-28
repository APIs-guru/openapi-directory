package shared

// ListRecommendedGoogleLocationsResponse
// Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
type ListRecommendedGoogleLocationsResponse struct {
	GoogleLocations []GoogleLocation `json:"googleLocations,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	TotalSize       *int32           `json:"totalSize,omitempty"`
}
