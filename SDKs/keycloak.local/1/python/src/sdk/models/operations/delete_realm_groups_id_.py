from dataclasses import dataclass, field



@dataclass
class DeleteRealmGroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmGroupsIDRequest:
    path_params: DeleteRealmGroupsIDPathParams = field()
    

@dataclass
class DeleteRealmGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
