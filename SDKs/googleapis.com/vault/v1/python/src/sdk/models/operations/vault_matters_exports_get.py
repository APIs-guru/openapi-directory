from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class VaultMattersExportsGetPathParams:
    export_id: str = field(default=None, metadata={'path_param': { 'field_name': 'exportId', 'style': 'simple', 'explode': False }})
    matter_id: str = field(default=None, metadata={'path_param': { 'field_name': 'matterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class VaultMattersExportsGetQueryParams:
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
class VaultMattersExportsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VaultMattersExportsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VaultMattersExportsGetSecurity:
    option1: Optional[VaultMattersExportsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[VaultMattersExportsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class VaultMattersExportsGetRequest:
    path_params: VaultMattersExportsGetPathParams = field(default=None)
    query_params: VaultMattersExportsGetQueryParams = field(default=None)
    security: VaultMattersExportsGetSecurity = field(default=None)
    

@dataclass
class VaultMattersExportsGetResponse:
    content_type: str = field(default=None)
    export: Optional[shared.Export] = field(default=None)
    status_code: int = field(default=None)
    
