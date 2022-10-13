from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConstraintPermutationsForEntitiesPathParams:
    variable: str = field(default=None, metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConstraintPermutationsForEntitiesQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    constraint: str = field(default=None, metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    entity_id: str = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConstraintPermutationsForEntitiesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token' }})
    

@dataclass
class GetConstraintPermutationsForEntitiesRequest:
    path_params: GetConstraintPermutationsForEntitiesPathParams = field(default=None)
    query_params: GetConstraintPermutationsForEntitiesQueryParams = field(default=None)
    headers: GetConstraintPermutationsForEntitiesHeaders = field(default=None)
    

@dataclass
class GetConstraintPermutationsForEntitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
