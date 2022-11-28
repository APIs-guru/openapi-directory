from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveChangesGetPathParams:
    change_id: str = field(metadata={'path_param': { 'field_name': 'changeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveChangesGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    drive_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'driveId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    team_drive_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamDriveId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveChangesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesGetSecurity:
    option1: Optional[DriveChangesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChangesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChangesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChangesGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChangesGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChangesGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChangesGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[DriveChangesGetSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveChangesGetRequest:
    path_params: DriveChangesGetPathParams = field()
    query_params: DriveChangesGetQueryParams = field()
    security: DriveChangesGetSecurity = field()
    

@dataclass
class DriveChangesGetResponse:
    content_type: str = field()
    status_code: int = field()
    change: Optional[shared.Change] = field(default=None)
    
