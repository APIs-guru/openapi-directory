from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveFilesCreateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ignore_default_visibility: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignoreDefaultVisibility', 'style': 'form', 'explode': True }})
    include_labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeLabels', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    keep_revision_forever: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'keepRevisionForever', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    ocr_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ocrLanguage', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    use_content_as_indexable_text: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useContentAsIndexableText', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveFilesCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesCreateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveFilesCreateSecurity:
    option1: Optional[DriveFilesCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveFilesCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveFilesCreateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveFilesCreateRequest:
    query_params: DriveFilesCreateQueryParams = field()
    security: DriveFilesCreateSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class DriveFilesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    file: Optional[shared.File] = field(default=None)
    
