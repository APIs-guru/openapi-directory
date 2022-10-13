package shared

type SearchTenancyUnitsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	TenancyUnits  []TenancyUnit `json:"tenancyUnits"`
}
