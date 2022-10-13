from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DeploymentmanagerTypeProvidersGetPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    type_provider: str = field(default=None, metadata={'path_param': { 'field_name': 'typeProvider', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetQueryParams:
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
class DeploymentmanagerTypeProvidersGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetSecurity:
    option1: Optional[DeploymentmanagerTypeProvidersGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeploymentmanagerTypeProvidersGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeploymentmanagerTypeProvidersGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DeploymentmanagerTypeProvidersGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeploymentmanagerTypeProvidersGetRequest:
    path_params: DeploymentmanagerTypeProvidersGetPathParams = field(default=None)
    query_params: DeploymentmanagerTypeProvidersGetQueryParams = field(default=None)
    security: DeploymentmanagerTypeProvidersGetSecurity = field(default=None)
    

@dataclass
class DeploymentmanagerTypeProvidersGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    type_provider: Optional[shared.TypeProvider] = field(default=None)
    
