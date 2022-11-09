import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum QueryMetadataDataRangeEnum {
    CustomDates = "CUSTOM_DATES",
    CurrentDay = "CURRENT_DAY",
    PreviousDay = "PREVIOUS_DAY",
    WeekToDate = "WEEK_TO_DATE",
    MonthToDate = "MONTH_TO_DATE",
    QuarterToDate = "QUARTER_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    PreviousWeek = "PREVIOUS_WEEK",
    PreviousHalfMonth = "PREVIOUS_HALF_MONTH",
    PreviousMonth = "PREVIOUS_MONTH",
    PreviousQuarter = "PREVIOUS_QUARTER",
    PreviousYear = "PREVIOUS_YEAR",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS",
    Last90Days = "LAST_90_DAYS",
    Last365Days = "LAST_365_DAYS",
    AllTime = "ALL_TIME",
    Last14Days = "LAST_14_DAYS",
    TypeNotSupported = "TYPE_NOT_SUPPORTED",
    Last60Days = "LAST_60_DAYS"
}
export declare enum QueryMetadataFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}
/**
 * Query metadata.
**/
export declare class QueryMetadata extends SpeakeasyBase {
    dataRange?: QueryMetadataDataRangeEnum;
    format?: QueryMetadataFormatEnum;
    googleCloudStoragePathForLatestReport?: string;
    googleDrivePathForLatestReport?: string;
    latestReportRunTimeMs?: string;
    locale?: string;
    reportCount?: number;
    running?: boolean;
    sendNotification?: boolean;
    shareEmailAddress?: string[];
    title?: string;
}
