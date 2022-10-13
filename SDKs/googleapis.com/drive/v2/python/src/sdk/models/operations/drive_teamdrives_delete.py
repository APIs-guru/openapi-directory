from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveTeamdrivesDeletePathParams:
    team_drive_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamDriveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveTeamdrivesDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveTeamdrivesDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveTeamdrivesDeleteRequest:
    path_params: DriveTeamdrivesDeletePathParams = field(default=None)
    query_params: DriveTeamdrivesDeleteQueryParams = field(default=None)
    security: DriveTeamdrivesDeleteSecurity = field(default=None)
    

@dataclass
class DriveTeamdrivesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
