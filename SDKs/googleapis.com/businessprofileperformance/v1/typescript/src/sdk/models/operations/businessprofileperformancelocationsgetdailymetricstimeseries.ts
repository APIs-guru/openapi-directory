import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum {
    DailyMetricUnknown = "DAILY_METRIC_UNKNOWN"
,    BusinessImpressionsDesktopMaps = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
,    BusinessImpressionsDesktopSearch = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
,    BusinessImpressionsMobileMaps = "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
,    BusinessImpressionsMobileSearch = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
,    BusinessConversations = "BUSINESS_CONVERSATIONS"
,    BusinessDirectionRequests = "BUSINESS_DIRECTION_REQUESTS"
,    CallClicks = "CALL_CLICKS"
,    WebsiteClicks = "WEBSITE_CLICKS"
,    BusinessBookings = "BUSINESS_BOOKINGS"
,    BusinessFoodOrders = "BUSINESS_FOOD_ORDERS"
}

export enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyMetric" })
  dailyMetric?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.day" })
  dailyRangeEndDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.month" })
  dailyRangeEndDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.year" })
  dailyRangeEndDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.day" })
  dailyRangeStartDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.month" })
  dailyRangeStartDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.year" })
  dailyRangeStartDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.dayOfWeek" })
  dailySubEntityTypeDayOfWeek?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.hours" })
  dailySubEntityTypeTimeOfDayHours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.minutes" })
  dailySubEntityTypeTimeOfDayMinutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.nanos" })
  dailySubEntityTypeTimeOfDayNanos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.seconds" })
  dailySubEntityTypeTimeOfDaySeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams;

  @Metadata()
  queryParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams;
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDailyMetricsTimeSeriesResponse?: shared.GetDailyMetricsTimeSeriesResponse;

  @Metadata()
  statusCode: number;
}
