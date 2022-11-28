package shared

// ListTenancyUnitsResponse
// Response for the list request.
type ListTenancyUnitsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	TenancyUnits  []TenancyUnit `json:"tenancyUnits,omitempty"`
}
