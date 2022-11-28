from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    image_pull_secret_content: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imagePullSecretContent', 'style': 'form', 'explode': True }})
    is_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isUpgrade', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    namespace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'namespace', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    proxy: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    registry: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'registry', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest:
    path_params: GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams = field()
    query_params: GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams = field()
    security: GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity = field()
    

@dataclass
class GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse:
    content_type: str = field()
    status_code: int = field()
    generate_connect_manifest_response: Optional[shared.GenerateConnectManifestResponse] = field(default=None)
    
