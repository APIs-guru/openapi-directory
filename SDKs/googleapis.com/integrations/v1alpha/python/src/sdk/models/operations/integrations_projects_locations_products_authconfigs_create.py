from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_certificate_encrypted_private_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientCertificate.encryptedPrivateKey', 'style': 'form', 'explode': True }})
    client_certificate_passphrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientCertificate.passphrase', 'style': 'form', 'explode': True }})
    client_certificate_ssl_certificate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientCertificate.sslCertificate', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest:
    path_params: IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams = field(default=None)
    query_params: IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudIntegrationsV1alphaAuthConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity = field(default=None)
    

@dataclass
class IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse:
    content_type: str = field(default=None)
    google_cloud_integrations_v1alpha_auth_config: Optional[shared.GoogleCloudIntegrationsV1alphaAuthConfig] = field(default=None)
    status_code: int = field(default=None)
    
