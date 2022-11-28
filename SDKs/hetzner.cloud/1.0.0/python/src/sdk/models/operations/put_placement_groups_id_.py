from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutPlacementGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPlacementGroupsIDUpdatePlacementGroupRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PutPlacementGroupsIDPlacementGroupResponsePlacementGroup:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutPlacementGroupsIDPlacementGroupResponse:
    placement_group: PutPlacementGroupsIDPlacementGroupResponsePlacementGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    

@dataclass
class PutPlacementGroupsIDRequest:
    path_params: PutPlacementGroupsIDPathParams = field()
    request: Optional[PutPlacementGroupsIDUpdatePlacementGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPlacementGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    placement_group_response: Optional[PutPlacementGroupsIDPlacementGroupResponse] = field(default=None)
    
