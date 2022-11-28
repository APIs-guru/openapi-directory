from dataclasses import dataclass, field



@dataclass
class PutRealmDefaultGroupsGroupIDPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmDefaultGroupsGroupIDRequest:
    path_params: PutRealmDefaultGroupsGroupIDPathParams = field()
    

@dataclass
class PutRealmDefaultGroupsGroupIDResponse:
    content_type: str = field()
    status_code: int = field()
    
