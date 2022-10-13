from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams:
    execution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityRequest:
    path_params: PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams = field(default=None)
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
