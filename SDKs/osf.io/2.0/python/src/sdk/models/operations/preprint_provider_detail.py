from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintProviderDetailPathParams:
    preprint_provider_id: str = field(metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProviderDetailRequest:
    path_params: PreprintProviderDetailPathParams = field()
    

@dataclass
class PreprintProviderDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
