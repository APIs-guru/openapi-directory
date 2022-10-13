from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class InitSnapshotUploadPathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitSnapshotUploadQueryParams:
    commit: str = field(default=None, metadata={'query_param': { 'field_name': 'commit', 'style': 'form', 'explode': True }})
    date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class InitSnapshotUploadSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class InitSnapshotUploadRequest:
    path_params: InitSnapshotUploadPathParams = field(default=None)
    query_params: InitSnapshotUploadQueryParams = field(default=None)
    security: InitSnapshotUploadSecurity = field(default=None)
    

@dataclass
class InitSnapshotUploadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_session: Optional[shared.UploadSession] = field(default=None)
    
