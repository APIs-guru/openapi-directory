from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDEvaluateScopesProtocolMappersPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesProtocolMappersQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesProtocolMappersRequest:
    path_params: GetRealmClientsIDEvaluateScopesProtocolMappersPathParams = field(default=None)
    query_params: GetRealmClientsIDEvaluateScopesProtocolMappersQueryParams = field(default=None)
    

@dataclass
class GetRealmClientsIDEvaluateScopesProtocolMappersResponse:
    client_scope_evaluate_resource_protocol_mapper_evaluation_representations: Optional[List[shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
