from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class FindTheRelativesOfAnEntityRelationEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"
    SIBLING = "sibling"
    PEER = "peer"


@dataclass
class FindTheRelativesOfAnEntityPathParams:
    relation: FindTheRelativesOfAnEntityRelationEnum = field(metadata={'path_param': { 'field_name': 'relation', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindTheRelativesOfAnEntityQueryParams:
    entity_id: str = field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FindTheRelativesOfAnEntityHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindTheRelativesOfAnEntityRequest:
    headers: FindTheRelativesOfAnEntityHeaders = field()
    path_params: FindTheRelativesOfAnEntityPathParams = field()
    query_params: FindTheRelativesOfAnEntityQueryParams = field()
    

@dataclass
class FindTheRelativesOfAnEntityResponse:
    content_type: str = field()
    status_code: int = field()
    
