from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class AddProjectModeEnum(str, Enum):
    FULL = "full"
    SPARSE = "sparse"
    UPLOAD = "upload"


@dataclass
class AddProjectQueryParams:
    commit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'commit', 'style': 'form', 'explode': True }})
    date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    language: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    mode: Optional[AddProjectModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    repository: str = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    worker_label: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'worker-label', 'style': 'form', 'explode': True }})
    

@dataclass
class AddProjectSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddProjectRequest:
    query_params: AddProjectQueryParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    security: AddProjectSecurity = field(default=None)
    

@dataclass
class AddProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    
