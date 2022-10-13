package shared

type Dashboard struct {
	ColumnLayout     *ColumnLayout     `json:"columnLayout"`
	DashboardFilters []DashboardFilter `json:"dashboardFilters"`
	DisplayName      *string           `json:"displayName"`
	Etag             *string           `json:"etag"`
	GridLayout       *GridLayout       `json:"gridLayout"`
	Labels           map[string]string `json:"labels"`
	MosaicLayout     *MosaicLayout     `json:"mosaicLayout"`
	Name             *string           `json:"name"`
	RowLayout        *RowLayout        `json:"rowLayout"`
}
