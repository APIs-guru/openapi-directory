from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class AddProjectModeEnum(str, Enum):
    FULL = "full"
    SPARSE = "sparse"
    UPLOAD = "upload"


@dataclass
class AddProjectQueryParams:
    repository: str = field(metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    commit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'commit', 'style': 'form', 'explode': True }})
    date_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    language: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    mode: Optional[AddProjectModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    worker_label: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'worker-label', 'style': 'form', 'explode': True }})
    

@dataclass
class AddProjectSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddProjectRequest:
    query_params: AddProjectQueryParams = field()
    security: AddProjectSecurity = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    

@dataclass
class AddProjectResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
