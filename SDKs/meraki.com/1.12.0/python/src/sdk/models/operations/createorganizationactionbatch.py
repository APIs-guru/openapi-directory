from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationActionBatchPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationActionBatchRequestBodyActions:
    operation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass_json
@dataclass
class CreateOrganizationActionBatchRequestBody:
    actions: List[CreateOrganizationActionBatchRequestBodyActions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    confirmed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    synchronous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous') }})
    

@dataclass
class CreateOrganizationActionBatchRequest:
    path_params: CreateOrganizationActionBatchPathParams = field()
    request: CreateOrganizationActionBatchRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationActionBatchResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_action_batch_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
