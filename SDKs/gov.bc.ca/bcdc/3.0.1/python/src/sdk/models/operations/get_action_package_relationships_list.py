from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionPackageRelationshipsListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id2: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id2', 'style': 'form', 'explode': True }})
    rel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rel', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageRelationshipsListRequest:
    query_params: GetActionPackageRelationshipsListQueryParams = field(default=None)
    

@dataclass
class GetActionPackageRelationshipsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
