package shared

type DataSourceParameter struct {
	Name         *string    `json:"name"`
	NamedRangeID *string    `json:"namedRangeId"`
	Range        *GridRange `json:"range"`
}
