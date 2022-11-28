from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetTaggedImagesPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetTaggedImagesOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"


@dataclass
class GetTaggedImagesQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    order_by: Optional[GetTaggedImagesOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaggedImagesHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImagesRequest:
    headers: GetTaggedImagesHeaders = field()
    path_params: GetTaggedImagesPathParams = field()
    query_params: GetTaggedImagesQueryParams = field()
    

@dataclass
class GetTaggedImagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    images: Optional[List[shared.Image]] = field(default=None)
    
