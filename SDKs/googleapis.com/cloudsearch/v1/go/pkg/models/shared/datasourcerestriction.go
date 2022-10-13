package shared

type DataSourceRestriction struct {
	FilterOptions []FilterOptions `json:"filterOptions"`
	Source        *Source         `json:"source"`
}
