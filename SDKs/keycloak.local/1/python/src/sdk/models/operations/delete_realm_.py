from dataclasses import dataclass, field



@dataclass
class DeleteRealmPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRequest:
    path_params: DeleteRealmPathParams = field()
    

@dataclass
class DeleteRealmResponse:
    content_type: str = field()
    status_code: int = field()
    
