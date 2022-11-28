from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePropertiesPatchPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    property_key: str = field(metadata={'path_param': { 'field_name': 'propertyKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePropertiesPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    visibility: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePropertiesPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesPatchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesPatchSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesPatchSecurity:
    option1: Optional[DrivePropertiesPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePropertiesPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DrivePropertiesPatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DrivePropertiesPatchSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePropertiesPatchRequest:
    path_params: DrivePropertiesPatchPathParams = field()
    query_params: DrivePropertiesPatchQueryParams = field()
    security: DrivePropertiesPatchSecurity = field()
    request: Optional[shared.Property] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivePropertiesPatchResponse:
    content_type: str = field()
    status_code: int = field()
    property: Optional[shared.Property] = field(default=None)
    
