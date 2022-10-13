from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipUninstallOwnershipIDPathParams:
    ownership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOwnershipUninstallOwnershipIDQueryParams:
    cancel_ownership: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cancelOwnership', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipUninstallOwnershipIDRequest:
    path_params: PostOwnershipUninstallOwnershipIDPathParams = field(default=None)
    query_params: PostOwnershipUninstallOwnershipIDQueryParams = field(default=None)
    

@dataclass
class PostOwnershipUninstallOwnershipIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
