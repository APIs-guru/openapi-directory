from dataclasses import dataclass, field



@dataclass
class PutRealmDefaultGroupsGroupIDPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmDefaultGroupsGroupIDRequest:
    path_params: PutRealmDefaultGroupsGroupIDPathParams = field(default=None)
    

@dataclass
class PutRealmDefaultGroupsGroupIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
