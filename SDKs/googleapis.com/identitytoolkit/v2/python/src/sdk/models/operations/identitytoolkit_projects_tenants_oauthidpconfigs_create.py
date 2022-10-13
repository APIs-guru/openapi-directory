from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_idp_config_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauthIdpConfigId', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity:
    option1: Optional[IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest:
    path_params: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams = field(default=None)
    query_params: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity = field(default=None)
    

@dataclass
class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse:
    content_type: str = field(default=None)
    google_cloud_identitytoolkit_admin_v2_o_auth_idp_config: Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig] = field(default=None)
    status_code: int = field(default=None)
    
