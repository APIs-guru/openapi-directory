package shared

// SearchTenancyUnitsResponse
// Response for the search query.
type SearchTenancyUnitsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	TenancyUnits  []TenancyUnit `json:"tenancyUnits,omitempty"`
}
