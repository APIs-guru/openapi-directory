package shared



type ReportAPIColumnSpec struct {
    ColumnName *string `json:"columnName,omitempty"`
    CustomDimensionName *string `json:"customDimensionName,omitempty"`
    CustomMetricName *string `json:"customMetricName,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    GroupByColumn *bool `json:"groupByColumn,omitempty"`
    HeaderText *string `json:"headerText,omitempty"`
    PlatformSource *string `json:"platformSource,omitempty"`
    ProductReportPerspective *string `json:"productReportPerspective,omitempty"`
    SavedColumnName *string `json:"savedColumnName,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}

