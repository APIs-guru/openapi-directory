from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipOwnershipIDPathParams:
    ownership_id: str = field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOwnershipOwnershipIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    expires: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expires', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipOwnershipIDRequest:
    path_params: PostOwnershipOwnershipIDPathParams = field()
    query_params: PostOwnershipOwnershipIDQueryParams = field()
    

@dataclass
class PostOwnershipOwnershipIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
