from dataclasses import dataclass, field



@dataclass
class GetOwnershipOwnershipIDPathParams:
    ownership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOwnershipOwnershipIDRequest:
    path_params: GetOwnershipOwnershipIDPathParams = field(default=None)
    

@dataclass
class GetOwnershipOwnershipIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
