package shared

type ListRecommendedGoogleLocationsResponse struct {
	GoogleLocations []GoogleLocation `json:"googleLocations"`
	NextPageToken   *string          `json:"nextPageToken"`
	TotalSize       *int32           `json:"totalSize"`
}
