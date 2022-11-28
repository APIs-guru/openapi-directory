from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipUninstallOwnershipIDPathParams:
    ownership_id: str = field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOwnershipUninstallOwnershipIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    cancel_ownership: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cancelOwnership', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipUninstallOwnershipIDRequest:
    path_params: PostOwnershipUninstallOwnershipIDPathParams = field()
    query_params: PostOwnershipUninstallOwnershipIDQueryParams = field()
    

@dataclass
class PostOwnershipUninstallOwnershipIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
