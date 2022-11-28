from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationActionBatchPathParams:
    action_batch_id: str = field(metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationActionBatchRequestBody:
    confirmed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    synchronous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous') }})
    

@dataclass
class UpdateOrganizationActionBatchRequest:
    path_params: UpdateOrganizationActionBatchPathParams = field()
    request: Optional[UpdateOrganizationActionBatchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationActionBatchResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_action_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
