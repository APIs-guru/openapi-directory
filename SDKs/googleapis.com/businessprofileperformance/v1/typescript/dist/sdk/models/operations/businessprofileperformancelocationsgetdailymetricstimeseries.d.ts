import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum {
    DailyMetricUnknown = "DAILY_METRIC_UNKNOWN",
    BusinessImpressionsDesktopMaps = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
    BusinessImpressionsDesktopSearch = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
    BusinessImpressionsMobileMaps = "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
    BusinessImpressionsMobileSearch = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
    BusinessConversations = "BUSINESS_CONVERSATIONS",
    BusinessDirectionRequests = "BUSINESS_DIRECTION_REQUESTS",
    CallClicks = "CALL_CLICKS",
    WebsiteClicks = "WEBSITE_CLICKS",
    BusinessBookings = "BUSINESS_BOOKINGS",
    BusinessFoodOrders = "BUSINESS_FOOD_ORDERS"
}
export declare enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dailyMetric?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;
    dailyRangeEndDateDay?: number;
    dailyRangeEndDateMonth?: number;
    dailyRangeEndDateYear?: number;
    dailyRangeStartDateDay?: number;
    dailyRangeStartDateMonth?: number;
    dailyRangeStartDateYear?: number;
    dailySubEntityTypeDayOfWeek?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;
    dailySubEntityTypeTimeOfDayHours?: number;
    dailySubEntityTypeTimeOfDayMinutes?: number;
    dailySubEntityTypeTimeOfDayNanos?: number;
    dailySubEntityTypeTimeOfDaySeconds?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest extends SpeakeasyBase {
    pathParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams;
    queryParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams;
}
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    getDailyMetricsTimeSeriesResponse?: shared.GetDailyMetricsTimeSeriesResponse;
    statusCode: number;
}
