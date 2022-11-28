from dataclasses import dataclass, field



@dataclass
class DeleteRealmDefaultGroupsGroupIDPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmDefaultGroupsGroupIDRequest:
    path_params: DeleteRealmDefaultGroupsGroupIDPathParams = field()
    

@dataclass
class DeleteRealmDefaultGroupsGroupIDResponse:
    content_type: str = field()
    status_code: int = field()
    
