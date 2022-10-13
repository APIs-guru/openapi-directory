from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SQLSslCertsCreateEphemeralPathParams:
    instance: str = field(default=None, metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class SQLSslCertsCreateEphemeralQueryParams:
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
class SQLSslCertsCreateEphemeralSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SQLSslCertsCreateEphemeralSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SQLSslCertsCreateEphemeralSecurity:
    option1: Optional[SQLSslCertsCreateEphemeralSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SQLSslCertsCreateEphemeralSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SQLSslCertsCreateEphemeralRequest:
    path_params: SQLSslCertsCreateEphemeralPathParams = field(default=None)
    query_params: SQLSslCertsCreateEphemeralQueryParams = field(default=None)
    request: Optional[shared.SslCertsCreateEphemeralRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SQLSslCertsCreateEphemeralSecurity = field(default=None)
    

@dataclass
class SQLSslCertsCreateEphemeralResponse:
    content_type: str = field(default=None)
    ssl_cert: Optional[shared.SslCert] = field(default=None)
    status_code: int = field(default=None)
    
