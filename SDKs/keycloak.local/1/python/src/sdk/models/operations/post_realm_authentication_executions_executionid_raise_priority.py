from dataclasses import dataclass, field



@dataclass
class PostRealmAuthenticationExecutionsExecutionIDRaisePriorityPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDRaisePriorityRequest:
    path_params: PostRealmAuthenticationExecutionsExecutionIDRaisePriorityPathParams = field()
    

@dataclass
class PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse:
    content_type: str = field()
    status_code: int = field()
    
