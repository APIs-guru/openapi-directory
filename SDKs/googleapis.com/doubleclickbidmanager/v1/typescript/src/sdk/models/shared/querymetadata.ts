import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryMetadataDataRangeEnum {
    CustomDates = "CUSTOM_DATES"
,    CurrentDay = "CURRENT_DAY"
,    PreviousDay = "PREVIOUS_DAY"
,    WeekToDate = "WEEK_TO_DATE"
,    MonthToDate = "MONTH_TO_DATE"
,    QuarterToDate = "QUARTER_TO_DATE"
,    YearToDate = "YEAR_TO_DATE"
,    PreviousWeek = "PREVIOUS_WEEK"
,    PreviousHalfMonth = "PREVIOUS_HALF_MONTH"
,    PreviousMonth = "PREVIOUS_MONTH"
,    PreviousQuarter = "PREVIOUS_QUARTER"
,    PreviousYear = "PREVIOUS_YEAR"
,    Last7Days = "LAST_7_DAYS"
,    Last30Days = "LAST_30_DAYS"
,    Last90Days = "LAST_90_DAYS"
,    Last365Days = "LAST_365_DAYS"
,    AllTime = "ALL_TIME"
,    Last14Days = "LAST_14_DAYS"
,    TypeNotSupported = "TYPE_NOT_SUPPORTED"
,    Last60Days = "LAST_60_DAYS"
}

export enum QueryMetadataFormatEnum {
    Csv = "CSV"
,    ExcelCsv = "EXCEL_CSV"
,    Xlsx = "XLSX"
}


// QueryMetadata
/** 
 * Query metadata.
**/
export class QueryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRange" })
  dataRange?: QueryMetadataDataRangeEnum;

  @Metadata({ data: "json, name=format" })
  format?: QueryMetadataFormatEnum;

  @Metadata({ data: "json, name=googleCloudStoragePathForLatestReport" })
  googleCloudStoragePathForLatestReport?: string;

  @Metadata({ data: "json, name=googleDrivePathForLatestReport" })
  googleDrivePathForLatestReport?: string;

  @Metadata({ data: "json, name=latestReportRunTimeMs" })
  latestReportRunTimeMs?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=reportCount" })
  reportCount?: number;

  @Metadata({ data: "json, name=running" })
  running?: boolean;

  @Metadata({ data: "json, name=sendNotification" })
  sendNotification?: boolean;

  @Metadata({ data: "json, name=shareEmailAddress" })
  shareEmailAddress?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
