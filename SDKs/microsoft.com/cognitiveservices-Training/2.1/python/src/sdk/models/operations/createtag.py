from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTagPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateTagHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagRequest:
    headers: CreateTagHeaders = field()
    path_params: CreateTagPathParams = field()
    query_params: CreateTagQueryParams = field()
    

@dataclass
class CreateTagResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
