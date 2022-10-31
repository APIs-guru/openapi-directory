package shared




type QueryMetadataDataRangeEnum string

const (
    QueryMetadataDataRangeEnumCustomDates QueryMetadataDataRangeEnum = "CUSTOM_DATES"
QueryMetadataDataRangeEnumCurrentDay QueryMetadataDataRangeEnum = "CURRENT_DAY"
QueryMetadataDataRangeEnumPreviousDay QueryMetadataDataRangeEnum = "PREVIOUS_DAY"
QueryMetadataDataRangeEnumWeekToDate QueryMetadataDataRangeEnum = "WEEK_TO_DATE"
QueryMetadataDataRangeEnumMonthToDate QueryMetadataDataRangeEnum = "MONTH_TO_DATE"
QueryMetadataDataRangeEnumQuarterToDate QueryMetadataDataRangeEnum = "QUARTER_TO_DATE"
QueryMetadataDataRangeEnumYearToDate QueryMetadataDataRangeEnum = "YEAR_TO_DATE"
QueryMetadataDataRangeEnumPreviousWeek QueryMetadataDataRangeEnum = "PREVIOUS_WEEK"
QueryMetadataDataRangeEnumPreviousHalfMonth QueryMetadataDataRangeEnum = "PREVIOUS_HALF_MONTH"
QueryMetadataDataRangeEnumPreviousMonth QueryMetadataDataRangeEnum = "PREVIOUS_MONTH"
QueryMetadataDataRangeEnumPreviousQuarter QueryMetadataDataRangeEnum = "PREVIOUS_QUARTER"
QueryMetadataDataRangeEnumPreviousYear QueryMetadataDataRangeEnum = "PREVIOUS_YEAR"
QueryMetadataDataRangeEnumLast7Days QueryMetadataDataRangeEnum = "LAST_7_DAYS"
QueryMetadataDataRangeEnumLast30Days QueryMetadataDataRangeEnum = "LAST_30_DAYS"
QueryMetadataDataRangeEnumLast90Days QueryMetadataDataRangeEnum = "LAST_90_DAYS"
QueryMetadataDataRangeEnumLast365Days QueryMetadataDataRangeEnum = "LAST_365_DAYS"
QueryMetadataDataRangeEnumAllTime QueryMetadataDataRangeEnum = "ALL_TIME"
QueryMetadataDataRangeEnumLast14Days QueryMetadataDataRangeEnum = "LAST_14_DAYS"
QueryMetadataDataRangeEnumTypeNotSupported QueryMetadataDataRangeEnum = "TYPE_NOT_SUPPORTED"
QueryMetadataDataRangeEnumLast60Days QueryMetadataDataRangeEnum = "LAST_60_DAYS"
)



type QueryMetadataFormatEnum string

const (
    QueryMetadataFormatEnumCsv QueryMetadataFormatEnum = "CSV"
QueryMetadataFormatEnumExcelCsv QueryMetadataFormatEnum = "EXCEL_CSV"
QueryMetadataFormatEnumXlsx QueryMetadataFormatEnum = "XLSX"
)


type QueryMetadata struct {
    DataRange *QueryMetadataDataRangeEnum `json:"dataRange,omitempty"`
    Format *QueryMetadataFormatEnum `json:"format,omitempty"`
    GoogleCloudStoragePathForLatestReport *string `json:"googleCloudStoragePathForLatestReport,omitempty"`
    GoogleDrivePathForLatestReport *string `json:"googleDrivePathForLatestReport,omitempty"`
    LatestReportRunTimeMs *string `json:"latestReportRunTimeMs,omitempty"`
    Locale *string `json:"locale,omitempty"`
    ReportCount *int32 `json:"reportCount,omitempty"`
    Running *bool `json:"running,omitempty"`
    SendNotification *bool `json:"sendNotification,omitempty"`
    ShareEmailAddress []string `json:"shareEmailAddress,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

