from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetPlacementGroupsSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetPlacementGroupsTypeParameterTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass
class GetPlacementGroupsQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlacementGroupsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetPlacementGroupsTypeParameterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlacementGroupsRequest:
    query_params: GetPlacementGroupsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPlacementGroups200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetPlacementGroups200ApplicationJSONMeta:
    pagination: GetPlacementGroups200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
class GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetPlacementGroups200ApplicationJSONPlacementGroupsPlacementGroup:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetPlacementGroups200ApplicationJSONPlacementGroupsResponse:
    meta: Optional[GetPlacementGroups200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    placement_groups: List[GetPlacementGroups200ApplicationJSONPlacementGroupsPlacementGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_groups' }})
    

@dataclass
class GetPlacementGroupsResponse:
    content_type: str = field(default=None)
    placement_groups_response: Optional[GetPlacementGroups200ApplicationJSONPlacementGroupsResponse] = field(default=None)
    status_code: int = field(default=None)
    
