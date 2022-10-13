from dataclasses import dataclass, field



@dataclass
class DeleteRealmGroupsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmGroupsIDRequest:
    path_params: DeleteRealmGroupsIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmGroupsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
