from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ServicemanagementServicesRolloutsGetPathParams:
    rollout_id: str = field(metadata={'path_param': { 'field_name': 'rolloutId', 'style': 'simple', 'explode': False }})
    service_name: str = field(metadata={'path_param': { 'field_name': 'serviceName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicemanagementServicesRolloutsGetQueryParams:
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
class ServicemanagementServicesRolloutsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesRolloutsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesRolloutsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesRolloutsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesRolloutsGetSecurity:
    option1: Optional[ServicemanagementServicesRolloutsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ServicemanagementServicesRolloutsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ServicemanagementServicesRolloutsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ServicemanagementServicesRolloutsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ServicemanagementServicesRolloutsGetRequest:
    path_params: ServicemanagementServicesRolloutsGetPathParams = field()
    query_params: ServicemanagementServicesRolloutsGetQueryParams = field()
    security: ServicemanagementServicesRolloutsGetSecurity = field()
    

@dataclass
class ServicemanagementServicesRolloutsGetResponse:
    content_type: str = field()
    status_code: int = field()
    rollout: Optional[shared.Rollout] = field(default=None)
    
