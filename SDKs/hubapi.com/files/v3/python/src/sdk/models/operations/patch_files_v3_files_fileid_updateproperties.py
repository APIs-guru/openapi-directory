from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesRequest:
    path_params: PatchFilesV3FilesFileIDUpdatePropertiesPathParams = field()
    request: shared.FileUpdateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchFilesV3FilesFileIDUpdatePropertiesSecurity = field()
    

@dataclass
class PatchFilesV3FilesFileIDUpdatePropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file: Optional[shared.File] = field(default=None)
    
