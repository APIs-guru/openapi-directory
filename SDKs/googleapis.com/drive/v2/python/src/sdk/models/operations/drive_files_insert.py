from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DriveFilesInsertVisibilityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    PRIVATE = "PRIVATE"


@dataclass
class DriveFilesInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    convert: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'convert', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeLabels', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    ocr: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ocr', 'style': 'form', 'explode': True }})
    ocr_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ocrLanguage', 'style': 'form', 'explode': True }})
    pinned: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pinned', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    timed_text_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timedTextLanguage', 'style': 'form', 'explode': True }})
    timed_text_track_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timedTextTrackName', 'style': 'form', 'explode': True }})
    use_content_as_indexable_text: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useContentAsIndexableText', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    visibility: Optional[DriveFilesInsertVisibilityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveFilesInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesInsertSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesInsertSecurity:
    option1: Optional[DriveFilesInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveFilesInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveFilesInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveFilesInsertSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveFilesInsertRequest:
    query_params: DriveFilesInsertQueryParams = field()
    security: DriveFilesInsertSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class DriveFilesInsertResponse:
    content_type: str = field()
    status_code: int = field()
    file: Optional[shared.File] = field(default=None)
    
