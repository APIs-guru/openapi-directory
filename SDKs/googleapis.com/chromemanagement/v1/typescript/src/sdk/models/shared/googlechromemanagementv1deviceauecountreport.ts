import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum {
    MonthUnspecified = "MONTH_UNSPECIFIED"
,    January = "JANUARY"
,    February = "FEBRUARY"
,    March = "MARCH"
,    April = "APRIL"
,    May = "MAY"
,    June = "JUNE"
,    July = "JULY"
,    August = "AUGUST"
,    September = "SEPTEMBER"
,    October = "OCTOBER"
,    November = "NOVEMBER"
,    December = "DECEMBER"
}


// GoogleChromeManagementV1DeviceAueCountReport
/** 
 * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
**/
export class GoogleChromeManagementV1DeviceAueCountReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=aueMonth" })
  aueMonth?: GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum;

  @Metadata({ data: "json, name=aueYear" })
  aueYear?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=expired" })
  expired?: boolean;

  @Metadata({ data: "json, name=model" })
  model?: string;
}
