import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum {
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

export enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyMetric" })
  dailyMetric?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.day" })
  dailyRangeEndDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.month" })
  dailyRangeEndDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.year" })
  dailyRangeEndDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.day" })
  dailyRangeStartDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.month" })
  dailyRangeStartDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.year" })
  dailyRangeStartDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.dayOfWeek" })
  dailySubEntityTypeDayOfWeek?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.hours" })
  dailySubEntityTypeTimeOfDayHours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.minutes" })
  dailySubEntityTypeTimeOfDayMinutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.nanos" })
  dailySubEntityTypeTimeOfDayNanos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.seconds" })
  dailySubEntityTypeTimeOfDaySeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams;

  @SpeakeasyMetadata()
  queryParams: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams;
}


export class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDailyMetricsTimeSeriesResponse?: shared.GetDailyMetricsTimeSeriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
