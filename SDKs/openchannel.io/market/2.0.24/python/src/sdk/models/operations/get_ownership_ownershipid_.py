from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOwnershipOwnershipIDPathParams:
    ownership_id: str = field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOwnershipOwnershipIDRequest:
    path_params: GetOwnershipOwnershipIDPathParams = field()
    

@dataclass
class GetOwnershipOwnershipIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
