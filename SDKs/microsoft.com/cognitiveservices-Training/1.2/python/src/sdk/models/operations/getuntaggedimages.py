from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUntaggedImagesPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetUntaggedImagesOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"


@dataclass
class GetUntaggedImagesQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    order_by: Optional[GetUntaggedImagesOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUntaggedImagesHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntaggedImagesRequest:
    path_params: GetUntaggedImagesPathParams = field(default=None)
    query_params: GetUntaggedImagesQueryParams = field(default=None)
    headers: GetUntaggedImagesHeaders = field(default=None)
    

@dataclass
class GetUntaggedImagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    images: Optional[List[shared.Image]] = field(default=None)
    status_code: int = field(default=None)
    
