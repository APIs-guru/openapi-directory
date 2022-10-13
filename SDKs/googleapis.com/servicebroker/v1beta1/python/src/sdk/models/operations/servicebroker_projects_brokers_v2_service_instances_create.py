from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams:
    instance_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instance_id', 'style': 'simple', 'explode': False }})
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    accepts_incomplete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acceptsIncomplete', 'style': 'form', 'explode': True }})
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
class ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest:
    path_params: ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams = field(default=None)
    query_params: ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudServicebrokerV1beta1ServiceInstance] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity = field(default=None)
    

@dataclass
class ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
