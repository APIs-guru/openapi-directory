from dataclasses import dataclass, field



@dataclass
class DeleteRealmComponentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmComponentsIDRequest:
    path_params: DeleteRealmComponentsIDPathParams = field()
    

@dataclass
class DeleteRealmComponentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
