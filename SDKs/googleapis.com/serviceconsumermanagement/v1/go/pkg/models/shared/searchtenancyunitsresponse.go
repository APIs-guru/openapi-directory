package shared



type SearchTenancyUnitsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TenancyUnits []TenancyUnit `json:"tenancyUnits,omitempty"`
    
}

