package shared

// Dashboard
// A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
type Dashboard struct {
	ColumnLayout     *ColumnLayout     `json:"columnLayout,omitempty"`
	DashboardFilters []DashboardFilter `json:"dashboardFilters,omitempty"`
	DisplayName      *string           `json:"displayName,omitempty"`
	Etag             *string           `json:"etag,omitempty"`
	GridLayout       *GridLayout       `json:"gridLayout,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	MosaicLayout     *MosaicLayout     `json:"mosaicLayout,omitempty"`
	Name             *string           `json:"name,omitempty"`
	RowLayout        *RowLayout        `json:"rowLayout,omitempty"`
}
