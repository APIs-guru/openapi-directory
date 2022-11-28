from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageShowQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageShowRequest:
    query_params: GetActionPackageShowQueryParams = field()
    

@dataclass
class GetActionPackageShowResponse:
    content_type: str = field()
    status_code: int = field()
    
