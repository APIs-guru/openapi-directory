from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationConfigIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationConfigIDRequest:
    path_params: DeleteRealmAuthenticationConfigIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmAuthenticationConfigIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
