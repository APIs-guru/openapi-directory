from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConstraintPermutationsForEntitiesPathParams:
    variable: str = field(metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConstraintPermutationsForEntitiesQueryParams:
    constraint: str = field(metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    entity_id: str = field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConstraintPermutationsForEntitiesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConstraintPermutationsForEntitiesRequest:
    headers: GetConstraintPermutationsForEntitiesHeaders = field()
    path_params: GetConstraintPermutationsForEntitiesPathParams = field()
    query_params: GetConstraintPermutationsForEntitiesQueryParams = field()
    

@dataclass
class GetConstraintPermutationsForEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
