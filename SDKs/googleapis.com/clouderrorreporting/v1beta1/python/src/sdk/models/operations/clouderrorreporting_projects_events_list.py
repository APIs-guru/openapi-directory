from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ClouderrorreportingProjectsEventsListPathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    
class ClouderrorreportingProjectsEventsListTimeRangePeriodEnum(str, Enum):
    PERIOD_UNSPECIFIED = "PERIOD_UNSPECIFIED"
    PERIOD_1_HOUR = "PERIOD_1_HOUR"
    PERIOD_6_HOURS = "PERIOD_6_HOURS"
    PERIOD_1_DAY = "PERIOD_1_DAY"
    PERIOD_1_WEEK = "PERIOD_1_WEEK"
    PERIOD_30_DAYS = "PERIOD_30_DAYS"


@dataclass
class ClouderrorreportingProjectsEventsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    service_filter_resource_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.resourceType', 'style': 'form', 'explode': True }})
    service_filter_service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.service', 'style': 'form', 'explode': True }})
    service_filter_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.version', 'style': 'form', 'explode': True }})
    time_range_period: Optional[ClouderrorreportingProjectsEventsListTimeRangePeriodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'timeRange.period', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClouderrorreportingProjectsEventsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouderrorreportingProjectsEventsListRequest:
    path_params: ClouderrorreportingProjectsEventsListPathParams = field(default=None)
    query_params: ClouderrorreportingProjectsEventsListQueryParams = field(default=None)
    security: ClouderrorreportingProjectsEventsListSecurity = field(default=None)
    

@dataclass
class ClouderrorreportingProjectsEventsListResponse:
    content_type: str = field(default=None)
    list_events_response: Optional[shared.ListEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
