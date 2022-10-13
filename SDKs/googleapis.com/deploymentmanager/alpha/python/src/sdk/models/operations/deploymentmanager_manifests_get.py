from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DeploymentmanagerManifestsGetPathParams:
    deployment: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment', 'style': 'simple', 'explode': False }})
    manifest: str = field(default=None, metadata={'path_param': { 'field_name': 'manifest', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentmanagerManifestsGetQueryParams:
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
class DeploymentmanagerManifestsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerManifestsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerManifestsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerManifestsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerManifestsGetSecurity:
    option1: Optional[DeploymentmanagerManifestsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeploymentmanagerManifestsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeploymentmanagerManifestsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DeploymentmanagerManifestsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeploymentmanagerManifestsGetRequest:
    path_params: DeploymentmanagerManifestsGetPathParams = field(default=None)
    query_params: DeploymentmanagerManifestsGetQueryParams = field(default=None)
    security: DeploymentmanagerManifestsGetSecurity = field(default=None)
    

@dataclass
class DeploymentmanagerManifestsGetResponse:
    content_type: str = field(default=None)
    manifest: Optional[shared.Manifest] = field(default=None)
    status_code: int = field(default=None)
    
