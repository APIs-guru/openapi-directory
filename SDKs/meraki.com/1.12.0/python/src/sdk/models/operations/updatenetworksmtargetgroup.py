from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSmTargetGroupPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = field(metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSmTargetGroupRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass
class UpdateNetworkSmTargetGroupRequest:
    path_params: UpdateNetworkSmTargetGroupPathParams = field()
    request: Optional[UpdateNetworkSmTargetGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSmTargetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_sm_target_group_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
