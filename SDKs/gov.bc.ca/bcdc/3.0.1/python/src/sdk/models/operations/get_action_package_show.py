from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageShowQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageShowRequest:
    query_params: GetActionPackageShowQueryParams = field(default=None)
    

@dataclass
class GetActionPackageShowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
