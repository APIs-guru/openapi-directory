from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class FirebaserulesProjectsReleasesGetExecutablePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum(str, Enum):
    RELEASE_EXECUTABLE_VERSION_UNSPECIFIED = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
    FIREBASE_RULES_EXECUTABLE_V1 = "FIREBASE_RULES_EXECUTABLE_V1"
    FIREBASE_RULES_EXECUTABLE_V2 = "FIREBASE_RULES_EXECUTABLE_V2"


@dataclass
class FirebaserulesProjectsReleasesGetExecutableQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    executable_version: Optional[FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'executableVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableSecurity:
    option1: Optional[FirebaserulesProjectsReleasesGetExecutableSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirebaserulesProjectsReleasesGetExecutableSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FirebaserulesProjectsReleasesGetExecutableSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableRequest:
    path_params: FirebaserulesProjectsReleasesGetExecutablePathParams = field(default=None)
    query_params: FirebaserulesProjectsReleasesGetExecutableQueryParams = field(default=None)
    security: FirebaserulesProjectsReleasesGetExecutableSecurity = field(default=None)
    

@dataclass
class FirebaserulesProjectsReleasesGetExecutableResponse:
    content_type: str = field(default=None)
    get_release_executable_response: Optional[shared.GetReleaseExecutableResponse] = field(default=None)
    status_code: int = field(default=None)
    
