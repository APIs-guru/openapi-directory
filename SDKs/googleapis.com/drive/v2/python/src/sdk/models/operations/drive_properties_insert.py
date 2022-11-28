from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePropertiesInsertPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePropertiesInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePropertiesInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesInsertSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesInsertSecurity:
    option1: Optional[DrivePropertiesInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePropertiesInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DrivePropertiesInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DrivePropertiesInsertSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePropertiesInsertRequest:
    path_params: DrivePropertiesInsertPathParams = field()
    query_params: DrivePropertiesInsertQueryParams = field()
    security: DrivePropertiesInsertSecurity = field()
    request: Optional[shared.Property] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivePropertiesInsertResponse:
    content_type: str = field()
    status_code: int = field()
    property: Optional[shared.Property] = field(default=None)
    
