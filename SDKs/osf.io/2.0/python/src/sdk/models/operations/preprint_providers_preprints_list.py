from dataclasses import dataclass, field
from typing import List


@dataclass
class PreprintProvidersPreprintsListPathParams:
    preprint_provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProvidersPreprintsListRequest:
    path_params: PreprintProvidersPreprintsListPathParams = field(default=None)
    

@dataclass
class PreprintProvidersPreprintsListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
