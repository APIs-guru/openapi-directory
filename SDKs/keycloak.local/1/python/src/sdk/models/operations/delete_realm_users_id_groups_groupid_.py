from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDGroupsGroupIDPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDGroupsGroupIDRequest:
    path_params: DeleteRealmUsersIDGroupsGroupIDPathParams = field()
    

@dataclass
class DeleteRealmUsersIDGroupsGroupIDResponse:
    content_type: str = field()
    status_code: int = field()
    
