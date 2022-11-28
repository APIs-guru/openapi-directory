from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveParentsDeletePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    parent_id: str = field(metadata={'path_param': { 'field_name': 'parentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveParentsDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveParentsDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsDeleteSecurity:
    option1: Optional[DriveParentsDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveParentsDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveParentsDeleteRequest:
    path_params: DriveParentsDeletePathParams = field()
    query_params: DriveParentsDeleteQueryParams = field()
    security: DriveParentsDeleteSecurity = field()
    

@dataclass
class DriveParentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
