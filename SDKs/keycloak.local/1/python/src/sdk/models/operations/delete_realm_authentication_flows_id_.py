from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationFlowsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationFlowsIDRequest:
    path_params: DeleteRealmAuthenticationFlowsIDPathParams = field()
    

@dataclass
class DeleteRealmAuthenticationFlowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
