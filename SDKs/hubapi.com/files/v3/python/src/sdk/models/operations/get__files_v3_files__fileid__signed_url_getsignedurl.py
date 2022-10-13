from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    
class GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum(str, Enum):
    THUMB = "thumb"
    ICON = "icon"
    MEDIUM = "medium"
    PREVIEW = "preview"


@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLQueryParams:
    expiration_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expirationSeconds', 'style': 'form', 'explode': True }})
    size: Optional[GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    upscale: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'upscale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity:
    option1: Optional[GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FilesFileIDSignedURLGetSignedURLSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLRequest:
    path_params: GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams = field(default=None)
    query_params: GetFilesV3FilesFileIDSignedURLGetSignedURLQueryParams = field(default=None)
    security: GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity = field(default=None)
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    signed_url: Optional[shared.SignedURL] = field(default=None)
    status_code: int = field(default=None)
    
