package shared



type ListTenancyUnitsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TenancyUnits []TenancyUnit `json:"tenancyUnits,omitempty"`
    
}

