from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum(str, Enum):
    DAILY_METRIC_UNKNOWN = "DAILY_METRIC_UNKNOWN"
    BUSINESS_IMPRESSIONS_DESKTOP_MAPS = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
    BUSINESS_IMPRESSIONS_DESKTOP_SEARCH = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
    BUSINESS_IMPRESSIONS_MOBILE_MAPS = "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
    BUSINESS_IMPRESSIONS_MOBILE_SEARCH = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
    BUSINESS_CONVERSATIONS = "BUSINESS_CONVERSATIONS"
    BUSINESS_DIRECTION_REQUESTS = "BUSINESS_DIRECTION_REQUESTS"
    CALL_CLICKS = "CALL_CLICKS"
    WEBSITE_CLICKS = "WEBSITE_CLICKS"
    BUSINESS_BOOKINGS = "BUSINESS_BOOKINGS"
    BUSINESS_FOOD_ORDERS = "BUSINESS_FOOD_ORDERS"

class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass
class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    daily_metric: Optional[BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dailyMetric', 'style': 'form', 'explode': True }})
    daily_range_end_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.endDate.day', 'style': 'form', 'explode': True }})
    daily_range_end_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.endDate.month', 'style': 'form', 'explode': True }})
    daily_range_end_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.endDate.year', 'style': 'form', 'explode': True }})
    daily_range_start_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.startDate.day', 'style': 'form', 'explode': True }})
    daily_range_start_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.startDate.month', 'style': 'form', 'explode': True }})
    daily_range_start_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailyRange.startDate.year', 'style': 'form', 'explode': True }})
    daily_sub_entity_type_day_of_week: Optional[BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dailySubEntityType.dayOfWeek', 'style': 'form', 'explode': True }})
    daily_sub_entity_type_time_of_day_hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailySubEntityType.timeOfDay.hours', 'style': 'form', 'explode': True }})
    daily_sub_entity_type_time_of_day_minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailySubEntityType.timeOfDay.minutes', 'style': 'form', 'explode': True }})
    daily_sub_entity_type_time_of_day_nanos: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailySubEntityType.timeOfDay.nanos', 'style': 'form', 'explode': True }})
    daily_sub_entity_type_time_of_day_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dailySubEntityType.timeOfDay.seconds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest:
    path_params: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams = field()
    query_params: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams = field()
    

@dataclass
class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_daily_metrics_time_series_response: Optional[shared.GetDailyMetricsTimeSeriesResponse] = field(default=None)
    
