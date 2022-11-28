from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClouderrorreportingProjectsGroupStatsListPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    
class ClouderrorreportingProjectsGroupStatsListAlignmentEnum(str, Enum):
    ERROR_COUNT_ALIGNMENT_UNSPECIFIED = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED"
    ALIGNMENT_EQUAL_ROUNDED = "ALIGNMENT_EQUAL_ROUNDED"
    ALIGNMENT_EQUAL_AT_END = "ALIGNMENT_EQUAL_AT_END"

class ClouderrorreportingProjectsGroupStatsListOrderEnum(str, Enum):
    GROUP_ORDER_UNSPECIFIED = "GROUP_ORDER_UNSPECIFIED"
    COUNT_DESC = "COUNT_DESC"
    LAST_SEEN_DESC = "LAST_SEEN_DESC"
    CREATED_DESC = "CREATED_DESC"
    AFFECTED_USERS_DESC = "AFFECTED_USERS_DESC"

class ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum(str, Enum):
    PERIOD_UNSPECIFIED = "PERIOD_UNSPECIFIED"
    PERIOD_1_HOUR = "PERIOD_1_HOUR"
    PERIOD_6_HOURS = "PERIOD_6_HOURS"
    PERIOD_1_DAY = "PERIOD_1_DAY"
    PERIOD_1_WEEK = "PERIOD_1_WEEK"
    PERIOD_30_DAYS = "PERIOD_30_DAYS"


@dataclass
class ClouderrorreportingProjectsGroupStatsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alignment: Optional[ClouderrorreportingProjectsGroupStatsListAlignmentEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alignment', 'style': 'form', 'explode': True }})
    alignment_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'alignmentTime', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order: Optional[ClouderrorreportingProjectsGroupStatsListOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    service_filter_resource_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.resourceType', 'style': 'form', 'explode': True }})
    service_filter_service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.service', 'style': 'form', 'explode': True }})
    service_filter_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceFilter.version', 'style': 'form', 'explode': True }})
    time_range_period: Optional[ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'timeRange.period', 'style': 'form', 'explode': True }})
    timed_count_duration: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timedCountDuration', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClouderrorreportingProjectsGroupStatsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouderrorreportingProjectsGroupStatsListRequest:
    path_params: ClouderrorreportingProjectsGroupStatsListPathParams = field()
    query_params: ClouderrorreportingProjectsGroupStatsListQueryParams = field()
    security: ClouderrorreportingProjectsGroupStatsListSecurity = field()
    

@dataclass
class ClouderrorreportingProjectsGroupStatsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_group_stats_response: Optional[shared.ListGroupStatsResponse] = field(default=None)
    
