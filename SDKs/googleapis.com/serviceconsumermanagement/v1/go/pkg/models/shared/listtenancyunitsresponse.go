package shared

type ListTenancyUnitsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	TenancyUnits  []TenancyUnit `json:"tenancyUnits"`
}
