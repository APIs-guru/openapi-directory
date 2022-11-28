from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    

@dataclass_json
@dataclass
class GetPlacementGroupsPlacementGroupsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetPlacementGroupsPlacementGroupsResponseMeta:
    pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
class GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetPlacementGroupsPlacementGroupsResponsePlacementGroup:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetPlacementGroupsPlacementGroupsResponse:
    placement_groups: List[GetPlacementGroupsPlacementGroupsResponsePlacementGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_groups') }})
    meta: Optional[GetPlacementGroupsPlacementGroupsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetPlacementGroupsRequest:
    query_params: GetPlacementGroupsQueryParams = field()
    

@dataclass
class GetPlacementGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    placement_groups_response: Optional[GetPlacementGroupsPlacementGroupsResponse] = field(default=None)
    
