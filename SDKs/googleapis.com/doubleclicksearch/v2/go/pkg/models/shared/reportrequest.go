package shared

type ReportRequestFilters struct {
	Column   *ReportAPIColumnSpec `json:"column"`
	Operator *string              `json:"operator"`
	Values   []interface{}        `json:"values"`
}

type ReportRequestOrderBy struct {
	Column    *ReportAPIColumnSpec `json:"column"`
	SortOrder *string              `json:"sortOrder"`
}

type ReportRequestReportScope struct {
	AdGroupID       *string `json:"adGroupId"`
	AdID            *string `json:"adId"`
	AdvertiserID    *string `json:"advertiserId"`
	AgencyID        *string `json:"agencyId"`
	CampaignID      *string `json:"campaignId"`
	EngineAccountID *string `json:"engineAccountId"`
	KeywordID       *string `json:"keywordId"`
}

type ReportRequestTimeRange struct {
	ChangedAttributesSinceTimestamp *string `json:"changedAttributesSinceTimestamp"`
	ChangedMetricsSinceTimestamp    *string `json:"changedMetricsSinceTimestamp"`
	EndDate                         *string `json:"endDate"`
	StartDate                       *string `json:"startDate"`
}

type ReportRequest struct {
	Columns                []ReportAPIColumnSpec     `json:"columns"`
	DownloadFormat         *string                   `json:"downloadFormat"`
	Filters                []ReportRequestFilters    `json:"filters"`
	IncludeDeletedEntities *bool                     `json:"includeDeletedEntities"`
	IncludeRemovedEntities *bool                     `json:"includeRemovedEntities"`
	MaxRowsPerFile         *int32                    `json:"maxRowsPerFile"`
	OrderBy                []ReportRequestOrderBy    `json:"orderBy"`
	ReportScope            *ReportRequestReportScope `json:"reportScope"`
	ReportType             *string                   `json:"reportType"`
	RowCount               *int32                    `json:"rowCount"`
	StartRow               *int32                    `json:"startRow"`
	StatisticsCurrency     *string                   `json:"statisticsCurrency"`
	TimeRange              *ReportRequestTimeRange   `json:"timeRange"`
	VerifySingleTimeZone   *bool                     `json:"verifySingleTimeZone"`
}
