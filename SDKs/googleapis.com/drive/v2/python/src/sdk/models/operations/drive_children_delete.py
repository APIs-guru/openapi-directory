from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveChildrenDeletePathParams:
    child_id: str = field(metadata={'path_param': { 'field_name': 'childId', 'style': 'simple', 'explode': False }})
    folder_id: str = field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveChildrenDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveChildrenDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenDeleteSecurity:
    option1: Optional[DriveChildrenDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChildrenDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveChildrenDeleteRequest:
    path_params: DriveChildrenDeletePathParams = field()
    query_params: DriveChildrenDeleteQueryParams = field()
    security: DriveChildrenDeleteSecurity = field()
    

@dataclass
class DriveChildrenDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
