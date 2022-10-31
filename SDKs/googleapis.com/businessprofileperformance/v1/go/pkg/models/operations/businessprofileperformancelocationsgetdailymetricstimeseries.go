package operations

import (
"openapi/pkg/models/shared")

type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum string

const (
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumDailyMetricUnknown BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "DAILY_METRIC_UNKNOWN"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessImpressionsDesktopMaps BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessImpressionsDesktopSearch BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessImpressionsMobileMaps BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessImpressionsMobileSearch BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessConversations BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_CONVERSATIONS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessDirectionRequests BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_DIRECTION_REQUESTS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumCallClicks BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "CALL_CLICKS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumWebsiteClicks BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "WEBSITE_CLICKS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessBookings BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_BOOKINGS"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessFoodOrders BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = "BUSINESS_FOOD_ORDERS"
)



type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum string

const (
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumDayOfWeekUnspecified BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumMonday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "MONDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumTuesday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "TUESDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumWednesday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "WEDNESDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumThursday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "THURSDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumFriday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "FRIDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumSaturday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "SATURDAY"
BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumSunday BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = "SUNDAY"
)


type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DailyMetric *BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum `queryParam:"style=form,explode=true,name=dailyMetric"`
    DailyRangeEndDateDay *int64 `queryParam:"style=form,explode=true,name=dailyRange.endDate.day"`
    DailyRangeEndDateMonth *int64 `queryParam:"style=form,explode=true,name=dailyRange.endDate.month"`
    DailyRangeEndDateYear *int64 `queryParam:"style=form,explode=true,name=dailyRange.endDate.year"`
    DailyRangeStartDateDay *int64 `queryParam:"style=form,explode=true,name=dailyRange.startDate.day"`
    DailyRangeStartDateMonth *int64 `queryParam:"style=form,explode=true,name=dailyRange.startDate.month"`
    DailyRangeStartDateYear *int64 `queryParam:"style=form,explode=true,name=dailyRange.startDate.year"`
    DailySubEntityTypeDayOfWeek *BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum `queryParam:"style=form,explode=true,name=dailySubEntityType.dayOfWeek"`
    DailySubEntityTypeTimeOfDayHours *int64 `queryParam:"style=form,explode=true,name=dailySubEntityType.timeOfDay.hours"`
    DailySubEntityTypeTimeOfDayMinutes *int64 `queryParam:"style=form,explode=true,name=dailySubEntityType.timeOfDay.minutes"`
    DailySubEntityTypeTimeOfDayNanos *int64 `queryParam:"style=form,explode=true,name=dailySubEntityType.timeOfDay.nanos"`
    DailySubEntityTypeTimeOfDaySeconds *int64 `queryParam:"style=form,explode=true,name=dailySubEntityType.timeOfDay.seconds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest struct {
    PathParams BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams 
    QueryParams BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams 
    
}

type BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse struct {
    ContentType string 
    GetDailyMetricsTimeSeriesResponse *shared.GetDailyMetricsTimeSeriesResponse 
    StatusCode int64 
    
}

