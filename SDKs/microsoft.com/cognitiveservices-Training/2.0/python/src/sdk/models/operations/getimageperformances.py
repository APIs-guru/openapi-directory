from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetImagePerformancesPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
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
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagePerformancesRequest:
    headers: GetImagePerformancesHeaders = field()
    path_params: GetImagePerformancesPathParams = field()
    query_params: GetImagePerformancesQueryParams = field()
    

@dataclass
class GetImagePerformancesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_performances: Optional[List[shared.ImagePerformance]] = field(default=None)
    
