import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryMetadataDataRangeEnum {
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

export enum QueryMetadataFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}


// QueryMetadata
/** 
 * Query metadata.
**/
export class QueryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRange" })
  dataRange?: QueryMetadataDataRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: QueryMetadataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=googleCloudStoragePathForLatestReport" })
  googleCloudStoragePathForLatestReport?: string;

  @SpeakeasyMetadata({ data: "json, name=googleDrivePathForLatestReport" })
  googleDrivePathForLatestReport?: string;

  @SpeakeasyMetadata({ data: "json, name=latestReportRunTimeMs" })
  latestReportRunTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=reportCount" })
  reportCount?: number;

  @SpeakeasyMetadata({ data: "json, name=running" })
  running?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sendNotification" })
  sendNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shareEmailAddress" })
  shareEmailAddress?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
