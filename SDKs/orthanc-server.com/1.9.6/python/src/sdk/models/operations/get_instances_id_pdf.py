from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDPdfPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPdfRequest:
    path_params: GetInstancesIDPdfPathParams = field()
    

@dataclass
class GetInstancesIDPdfResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
