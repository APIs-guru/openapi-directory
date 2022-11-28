from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    idp_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpId', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity:
    option1: Optional[IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest:
    path_params: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams = field()
    query_params: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams = field()
    security: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity = field()
    request: Optional[shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_identitytoolkit_admin_v2_default_supported_idp_config: Optional[shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig] = field(default=None)
    
