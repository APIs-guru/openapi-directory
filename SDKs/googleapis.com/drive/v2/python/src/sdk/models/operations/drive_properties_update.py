from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePropertiesUpdatePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    property_key: str = field(metadata={'path_param': { 'field_name': 'propertyKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePropertiesUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    visibility: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePropertiesUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesUpdateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePropertiesUpdateSecurity:
    option1: Optional[DrivePropertiesUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePropertiesUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DrivePropertiesUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DrivePropertiesUpdateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePropertiesUpdateRequest:
    path_params: DrivePropertiesUpdatePathParams = field()
    query_params: DrivePropertiesUpdateQueryParams = field()
    security: DrivePropertiesUpdateSecurity = field()
    request: Optional[shared.Property] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivePropertiesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    property: Optional[shared.Property] = field(default=None)
    
