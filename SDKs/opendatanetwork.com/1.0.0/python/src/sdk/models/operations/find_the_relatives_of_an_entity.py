from dataclasses import dataclass, field
from typing import Enum,Optional

class FindTheRelativesOfAnEntityRelationEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"
    SIBLING = "sibling"
    PEER = "peer"


@dataclass
class FindTheRelativesOfAnEntityPathParams:
    relation: FindTheRelativesOfAnEntityRelationEnum = field(default=None, metadata={'path_param': { 'field_name': 'relation', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindTheRelativesOfAnEntityQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    entity_id: str = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FindTheRelativesOfAnEntityHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token' }})
    

@dataclass
class FindTheRelativesOfAnEntityRequest:
    path_params: FindTheRelativesOfAnEntityPathParams = field(default=None)
    query_params: FindTheRelativesOfAnEntityQueryParams = field(default=None)
    headers: FindTheRelativesOfAnEntityHeaders = field(default=None)
    

@dataclass
class FindTheRelativesOfAnEntityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
