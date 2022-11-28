from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    history_id: str = field(metadata={'path_param': { 'field_name': 'historyId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    step_id: str = field(metadata={'path_param': { 'field_name': 'stepId', 'style': 'simple', 'explode': False }})
    
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"


@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[List[ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest:
    path_params: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams = field()
    query_params: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams = field()
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity = field()
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_perf_sample_series_response: Optional[shared.ListPerfSampleSeriesResponse] = field(default=None)
    
