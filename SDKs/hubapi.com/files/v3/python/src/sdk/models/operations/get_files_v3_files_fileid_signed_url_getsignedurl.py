from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    
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
class GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLRequest:
    path_params: GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams = field()
    query_params: GetFilesV3FilesFileIDSignedURLGetSignedURLQueryParams = field()
    security: GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity = field()
    

@dataclass
class GetFilesV3FilesFileIDSignedURLGetSignedURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    signed_url: Optional[shared.SignedURL] = field(default=None)
    
