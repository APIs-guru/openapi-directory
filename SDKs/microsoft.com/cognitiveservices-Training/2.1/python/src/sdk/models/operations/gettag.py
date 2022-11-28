from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagRequest:
    headers: GetTagHeaders = field()
    path_params: GetTagPathParams = field()
    query_params: GetTagQueryParams = field()
    

@dataclass
class GetTagResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
