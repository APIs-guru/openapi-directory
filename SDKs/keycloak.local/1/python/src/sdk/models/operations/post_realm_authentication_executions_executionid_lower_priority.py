from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityRequest:
    path_params: PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams = field()
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse:
    content_type: str = field()
    status_code: int = field()
    
