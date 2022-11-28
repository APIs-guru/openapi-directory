package shared

// DataSourceParameter
// A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
type DataSourceParameter struct {
	Name         *string    `json:"name,omitempty"`
	NamedRangeID *string    `json:"namedRangeId,omitempty"`
	Range        *GridRange `json:"range,omitempty"`
}
