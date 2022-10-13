from dataclasses import dataclass, field



@dataclass
class PutRealmUsersIDGroupsGroupIDPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDGroupsGroupIDRequest:
    path_params: PutRealmUsersIDGroupsGroupIDPathParams = field(default=None)
    

@dataclass
class PutRealmUsersIDGroupsGroupIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
