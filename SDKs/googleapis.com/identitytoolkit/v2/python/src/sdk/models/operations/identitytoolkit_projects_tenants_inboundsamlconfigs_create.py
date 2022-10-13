from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    inbound_saml_config_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inboundSamlConfigId', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity:
    option1: Optional[IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest:
    path_params: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams = field(default=None)
    query_params: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity = field(default=None)
    

@dataclass
class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse:
    content_type: str = field(default=None)
    google_cloud_identitytoolkit_admin_v2_inbound_saml_config: Optional[shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig] = field(default=None)
    status_code: int = field(default=None)
    
