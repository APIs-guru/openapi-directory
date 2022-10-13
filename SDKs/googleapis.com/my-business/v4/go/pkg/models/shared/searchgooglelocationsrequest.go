package shared

type SearchGoogleLocationsRequest struct {
	Location    *Location `json:"location"`
	Query       *string   `json:"query"`
	ResultCount *int32    `json:"resultCount"`
}
