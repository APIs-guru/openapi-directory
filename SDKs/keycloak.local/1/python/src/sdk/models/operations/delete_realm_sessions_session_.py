from dataclasses import dataclass, field



@dataclass
class DeleteRealmSessionsSessionPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    session: str = field(metadata={'path_param': { 'field_name': 'session', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmSessionsSessionRequest:
    path_params: DeleteRealmSessionsSessionPathParams = field()
    

@dataclass
class DeleteRealmSessionsSessionResponse:
    content_type: str = field()
    status_code: int = field()
    
