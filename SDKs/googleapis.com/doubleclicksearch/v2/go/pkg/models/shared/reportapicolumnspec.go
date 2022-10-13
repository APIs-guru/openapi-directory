package shared

type ReportAPIColumnSpec struct {
	ColumnName               *string `json:"columnName"`
	CustomDimensionName      *string `json:"customDimensionName"`
	CustomMetricName         *string `json:"customMetricName"`
	EndDate                  *string `json:"endDate"`
	GroupByColumn            *bool   `json:"groupByColumn"`
	HeaderText               *string `json:"headerText"`
	PlatformSource           *string `json:"platformSource"`
	ProductReportPerspective *string `json:"productReportPerspective"`
	SavedColumnName          *string `json:"savedColumnName"`
	StartDate                *string `json:"startDate"`
}
