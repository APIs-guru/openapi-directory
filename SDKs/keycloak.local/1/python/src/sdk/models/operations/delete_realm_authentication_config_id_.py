from dataclasses import dataclass, field



@dataclass
class DeleteRealmAuthenticationConfigIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAuthenticationConfigIDRequest:
    path_params: DeleteRealmAuthenticationConfigIDPathParams = field()
    

@dataclass
class DeleteRealmAuthenticationConfigIDResponse:
    content_type: str = field()
    status_code: int = field()
    
