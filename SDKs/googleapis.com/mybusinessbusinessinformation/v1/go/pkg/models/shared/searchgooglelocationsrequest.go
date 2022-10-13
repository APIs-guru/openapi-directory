package shared

type SearchGoogleLocationsRequest struct {
	Location *Location `json:"location"`
	PageSize *int32    `json:"pageSize"`
	Query    *string   `json:"query"`
}
