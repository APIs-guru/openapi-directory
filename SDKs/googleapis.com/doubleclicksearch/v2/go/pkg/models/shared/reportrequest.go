package shared



type ReportRequestFilters struct {
    Column *ReportAPIColumnSpec `json:"column,omitempty"`
    Operator *string `json:"operator,omitempty"`
    Values []interface{} `json:"values,omitempty"`
    
}

type ReportRequestOrderBy struct {
    Column *ReportAPIColumnSpec `json:"column,omitempty"`
    SortOrder *string `json:"sortOrder,omitempty"`
    
}

type ReportRequestReportScope struct {
    AdGroupID *string `json:"adGroupId,omitempty"`
    AdID *string `json:"adId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AgencyID *string `json:"agencyId,omitempty"`
    CampaignID *string `json:"campaignId,omitempty"`
    EngineAccountID *string `json:"engineAccountId,omitempty"`
    KeywordID *string `json:"keywordId,omitempty"`
    
}

type ReportRequestTimeRange struct {
    ChangedAttributesSinceTimestamp *string `json:"changedAttributesSinceTimestamp,omitempty"`
    ChangedMetricsSinceTimestamp *string `json:"changedMetricsSinceTimestamp,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}

type ReportRequest struct {
    Columns []ReportAPIColumnSpec `json:"columns,omitempty"`
    DownloadFormat *string `json:"downloadFormat,omitempty"`
    Filters []ReportRequestFilters `json:"filters,omitempty"`
    IncludeDeletedEntities *bool `json:"includeDeletedEntities,omitempty"`
    IncludeRemovedEntities *bool `json:"includeRemovedEntities,omitempty"`
    MaxRowsPerFile *int32 `json:"maxRowsPerFile,omitempty"`
    OrderBy []ReportRequestOrderBy `json:"orderBy,omitempty"`
    ReportScope *ReportRequestReportScope `json:"reportScope,omitempty"`
    ReportType *string `json:"reportType,omitempty"`
    RowCount *int32 `json:"rowCount,omitempty"`
    StartRow *int32 `json:"startRow,omitempty"`
    StatisticsCurrency *string `json:"statisticsCurrency,omitempty"`
    TimeRange *ReportRequestTimeRange `json:"timeRange,omitempty"`
    VerifySingleTimeZone *bool `json:"verifySingleTimeZone,omitempty"`
    
}

