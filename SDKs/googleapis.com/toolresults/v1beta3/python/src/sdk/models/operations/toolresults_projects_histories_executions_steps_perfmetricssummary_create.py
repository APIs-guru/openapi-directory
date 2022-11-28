from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    history_id: str = field(metadata={'path_param': { 'field_name': 'historyId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    step_id: str = field(metadata={'path_param': { 'field_name': 'stepId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest:
    path_params: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams = field()
    query_params: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams = field()
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity = field()
    request: Optional[shared.PerfMetricsSummary] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse:
    content_type: str = field()
    status_code: int = field()
    perf_metrics_summary: Optional[shared.PerfMetricsSummary] = field(default=None)
    
