from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipOwnershipIDPathParams:
    ownership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOwnershipOwnershipIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    expires: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expires', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipOwnershipIDRequest:
    path_params: PostOwnershipOwnershipIDPathParams = field(default=None)
    query_params: PostOwnershipOwnershipIDQueryParams = field(default=None)
    

@dataclass
class PostOwnershipOwnershipIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
