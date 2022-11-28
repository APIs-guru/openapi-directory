from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    crypto_key_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cryptoKeyId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    skip_initial_version_creation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'skipInitialVersionCreation', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity:
    option1: Optional[CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest:
    path_params: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams = field()
    query_params: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams = field()
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity = field()
    request: Optional[shared.CryptoKeyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse:
    content_type: str = field()
    status_code: int = field()
    crypto_key: Optional[shared.CryptoKey] = field(default=None)
    
