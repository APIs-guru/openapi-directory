import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum {
    MonthUnspecified = "MONTH_UNSPECIFIED",
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER"
}
/**
 * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
**/
export declare class GoogleChromeManagementV1DeviceAueCountReport extends SpeakeasyBase {
    aueMonth?: GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum;
    aueYear?: string;
    count?: string;
    expired?: boolean;
    model?: string;
}
