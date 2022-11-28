from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ServicemanagementServicesGetConfigPathParams:
    service_name: str = field(metadata={'path_param': { 'field_name': 'serviceName', 'style': 'simple', 'explode': False }})
    
class ServicemanagementServicesGetConfigViewEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class ServicemanagementServicesGetConfigQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    config_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'configId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[ServicemanagementServicesGetConfigViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicemanagementServicesGetConfigSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesGetConfigSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesGetConfigSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesGetConfigSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServicemanagementServicesGetConfigSecurity:
    option1: Optional[ServicemanagementServicesGetConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ServicemanagementServicesGetConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ServicemanagementServicesGetConfigSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ServicemanagementServicesGetConfigSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ServicemanagementServicesGetConfigRequest:
    path_params: ServicemanagementServicesGetConfigPathParams = field()
    query_params: ServicemanagementServicesGetConfigQueryParams = field()
    security: ServicemanagementServicesGetConfigSecurity = field()
    

@dataclass
class ServicemanagementServicesGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
