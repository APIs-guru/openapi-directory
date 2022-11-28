from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveRevisionsUpdatePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    revision_id: str = field(metadata={'path_param': { 'field_name': 'revisionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveRevisionsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveRevisionsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsUpdateSecurity:
    option1: Optional[DriveRevisionsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveRevisionsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveRevisionsUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveRevisionsUpdateRequest:
    path_params: DriveRevisionsUpdatePathParams = field()
    query_params: DriveRevisionsUpdateQueryParams = field()
    security: DriveRevisionsUpdateSecurity = field()
    request: Optional[shared.Revision] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DriveRevisionsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    revision: Optional[shared.Revision] = field(default=None)
    
