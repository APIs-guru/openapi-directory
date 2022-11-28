from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintProvidersPreprintsListPathParams:
    preprint_provider_id: str = field(metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProvidersPreprintsListRequest:
    path_params: PreprintProvidersPreprintsListPathParams = field()
    

@dataclass
class PreprintProvidersPreprintsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
