from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delegatedProjectNumber', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projectNumber', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigRequest:
    query_params: IdentitytoolkitRelyingpartyGetProjectConfigQueryParams = field()
    security: IdentitytoolkitRelyingpartyGetProjectConfigSecurity = field()
    

@dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigResponse:
    content_type: str = field()
    status_code: int = field()
    identitytoolkit_relyingparty_get_project_config_response: Optional[shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse] = field(default=None)
    
