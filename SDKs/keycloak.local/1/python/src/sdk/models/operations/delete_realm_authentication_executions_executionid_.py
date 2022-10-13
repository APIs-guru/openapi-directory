from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationExecutionsExecutionIDPathParams:
    execution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationExecutionsExecutionIDRequest:
    path_params: DeleteRealmAuthenticationExecutionsExecutionIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmAuthenticationExecutionsExecutionIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
