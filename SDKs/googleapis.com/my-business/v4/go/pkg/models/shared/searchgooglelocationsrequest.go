package shared



type SearchGoogleLocationsRequest struct {
    Location *Location `json:"location,omitempty"`
    Query *string `json:"query,omitempty"`
    ResultCount *int32 `json:"resultCount,omitempty"`
    
}

