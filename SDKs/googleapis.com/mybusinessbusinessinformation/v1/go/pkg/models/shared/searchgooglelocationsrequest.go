package shared

type SearchGoogleLocationsRequest struct {
	Location *Location `json:"location,omitempty"`
	PageSize *int32    `json:"pageSize,omitempty"`
	Query    *string   `json:"query,omitempty"`
}
