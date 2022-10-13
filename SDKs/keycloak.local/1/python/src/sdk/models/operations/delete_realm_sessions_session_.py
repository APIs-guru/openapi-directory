from dataclasses import dataclass, field



@dataclass
class DeleteRealmSessionsSessionPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    session: str = field(default=None, metadata={'path_param': { 'field_name': 'session', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmSessionsSessionRequest:
    path_params: DeleteRealmSessionsSessionPathParams = field(default=None)
    

@dataclass
class DeleteRealmSessionsSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
