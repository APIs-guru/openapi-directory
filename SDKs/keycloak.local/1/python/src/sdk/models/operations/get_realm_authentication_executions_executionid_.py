from dataclasses import dataclass, field



@dataclass
class GetRealmAuthenticationExecutionsExecutionIDPathParams:
    execution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationExecutionsExecutionIDRequest:
    path_params: GetRealmAuthenticationExecutionsExecutionIDPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationExecutionsExecutionIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
