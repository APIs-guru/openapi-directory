from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationFlowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationFlowsIDRequest:
    path_params: DeleteRealmAuthenticationFlowsIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmAuthenticationFlowsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
