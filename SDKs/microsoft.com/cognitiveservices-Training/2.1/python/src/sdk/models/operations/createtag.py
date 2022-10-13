from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTagPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateTagHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class CreateTagRequest:
    path_params: CreateTagPathParams = field(default=None)
    query_params: CreateTagQueryParams = field(default=None)
    headers: CreateTagHeaders = field(default=None)
    

@dataclass
class CreateTagResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
