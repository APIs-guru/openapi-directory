from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class RunNamespacesExecutionsListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class RunNamespacesExecutionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    continue_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'continue', 'style': 'form', 'explode': True }})
    field_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldSelector', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_uninitialized: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeUninitialized', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labelSelector', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    resource_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceVersion', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    watch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'watch', 'style': 'form', 'explode': True }})
    

@dataclass
class RunNamespacesExecutionsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RunNamespacesExecutionsListRequest:
    path_params: RunNamespacesExecutionsListPathParams = field(default=None)
    query_params: RunNamespacesExecutionsListQueryParams = field(default=None)
    security: RunNamespacesExecutionsListSecurity = field(default=None)
    

@dataclass
class RunNamespacesExecutionsListResponse:
    content_type: str = field(default=None)
    list_executions_response: Optional[shared.ListExecutionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
