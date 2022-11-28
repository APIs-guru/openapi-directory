from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_params_custom_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.customFilter', 'style': 'form', 'explode': True }})
    filter_params_end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.endTime', 'style': 'form', 'explode': True }})
    filter_params_event_statuses: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.eventStatuses', 'style': 'form', 'explode': True }})
    filter_params_execution_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.executionId', 'style': 'form', 'explode': True }})
    filter_params_parameter_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.parameterKey', 'style': 'form', 'explode': True }})
    filter_params_parameter_pair_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.parameterPairKey', 'style': 'form', 'explode': True }})
    filter_params_parameter_pair_value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.parameterPairValue', 'style': 'form', 'explode': True }})
    filter_params_parameter_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.parameterType', 'style': 'form', 'explode': True }})
    filter_params_parameter_value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.parameterValue', 'style': 'form', 'explode': True }})
    filter_params_start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.startTime', 'style': 'form', 'explode': True }})
    filter_params_task_statuses: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.taskStatuses', 'style': 'form', 'explode': True }})
    filter_params_workflow_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterParams.workflowName', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readMask', 'style': 'form', 'explode': True }})
    refresh_acl: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshAcl', 'style': 'form', 'explode': True }})
    truncate_params: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'truncateParams', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest:
    path_params: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams = field()
    query_params: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams = field()
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity = field()
    

@dataclass
class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_integrations_v1alpha_list_executions_response: Optional[shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse] = field(default=None)
    
