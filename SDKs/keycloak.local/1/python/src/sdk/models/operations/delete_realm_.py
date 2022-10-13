from dataclasses import dataclass, field



@dataclass
class DeleteRealmPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRequest:
    path_params: DeleteRealmPathParams = field(default=None)
    

@dataclass
class DeleteRealmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
