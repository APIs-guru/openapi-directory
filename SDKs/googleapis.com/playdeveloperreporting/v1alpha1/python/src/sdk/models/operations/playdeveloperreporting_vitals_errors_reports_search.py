from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PlaydeveloperreportingVitalsErrorsReportsSearchPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    interval_end_time_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.day', 'style': 'form', 'explode': True }})
    interval_end_time_hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.hours', 'style': 'form', 'explode': True }})
    interval_end_time_minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.minutes', 'style': 'form', 'explode': True }})
    interval_end_time_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.month', 'style': 'form', 'explode': True }})
    interval_end_time_nanos: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.nanos', 'style': 'form', 'explode': True }})
    interval_end_time_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.seconds', 'style': 'form', 'explode': True }})
    interval_end_time_time_zone_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.timeZone.id', 'style': 'form', 'explode': True }})
    interval_end_time_time_zone_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.timeZone.version', 'style': 'form', 'explode': True }})
    interval_end_time_utc_offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.utcOffset', 'style': 'form', 'explode': True }})
    interval_end_time_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime.year', 'style': 'form', 'explode': True }})
    interval_start_time_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.day', 'style': 'form', 'explode': True }})
    interval_start_time_hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.hours', 'style': 'form', 'explode': True }})
    interval_start_time_minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.minutes', 'style': 'form', 'explode': True }})
    interval_start_time_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.month', 'style': 'form', 'explode': True }})
    interval_start_time_nanos: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.nanos', 'style': 'form', 'explode': True }})
    interval_start_time_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.seconds', 'style': 'form', 'explode': True }})
    interval_start_time_time_zone_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.timeZone.id', 'style': 'form', 'explode': True }})
    interval_start_time_time_zone_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.timeZone.version', 'style': 'form', 'explode': True }})
    interval_start_time_utc_offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.utcOffset', 'style': 'form', 'explode': True }})
    interval_start_time_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime.year', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaydeveloperreportingVitalsErrorsReportsSearchRequest:
    path_params: PlaydeveloperreportingVitalsErrorsReportsSearchPathParams = field(default=None)
    query_params: PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams = field(default=None)
    

@dataclass
class PlaydeveloperreportingVitalsErrorsReportsSearchResponse:
    content_type: str = field(default=None)
    google_play_developer_reporting_v1alpha1_search_error_reports_response: Optional[shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse] = field(default=None)
    status_code: int = field(default=None)
    
