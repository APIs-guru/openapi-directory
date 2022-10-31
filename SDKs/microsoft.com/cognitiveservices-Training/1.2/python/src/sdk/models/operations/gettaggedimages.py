from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetTaggedImagesPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
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
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImagesRequest:
    path_params: GetTaggedImagesPathParams = field(default=None)
    query_params: GetTaggedImagesQueryParams = field(default=None)
    headers: GetTaggedImagesHeaders = field(default=None)
    

@dataclass
class GetTaggedImagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    images: Optional[List[shared.Image]] = field(default=None)
    status_code: int = field(default=None)
    
