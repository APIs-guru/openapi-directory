from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetPlacementGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetPlacementGroupsIDPlacementGroupResponsePlacementGroup:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetPlacementGroupsIDPlacementGroupResponse:
    placement_group: GetPlacementGroupsIDPlacementGroupResponsePlacementGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    

@dataclass
class GetPlacementGroupsIDRequest:
    path_params: GetPlacementGroupsIDPathParams = field()
    

@dataclass
class GetPlacementGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    placement_group_response: Optional[GetPlacementGroupsIDPlacementGroupResponse] = field(default=None)
    
