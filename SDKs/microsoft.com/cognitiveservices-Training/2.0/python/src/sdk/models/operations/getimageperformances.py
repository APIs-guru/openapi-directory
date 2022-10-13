from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetImagePerformancesPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetImagePerformancesOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"


@dataclass
class GetImagePerformancesQueryParams:
    order_by: Optional[GetImagePerformancesOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImagePerformancesHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetImagePerformancesRequest:
    path_params: GetImagePerformancesPathParams = field(default=None)
    query_params: GetImagePerformancesQueryParams = field(default=None)
    headers: GetImagePerformancesHeaders = field(default=None)
    

@dataclass
class GetImagePerformancesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_performances: Optional[List[shared.ImagePerformance]] = field(default=None)
    status_code: int = field(default=None)
    
