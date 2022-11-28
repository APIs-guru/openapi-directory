package shared

// DataSourceRestriction
// Restriction on Datasource.
type DataSourceRestriction struct {
	FilterOptions []FilterOptions `json:"filterOptions,omitempty"`
	Source        *Source         `json:"source,omitempty"`
}
