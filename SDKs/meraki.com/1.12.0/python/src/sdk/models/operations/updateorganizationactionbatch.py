from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationActionBatchPathParams:
    action_batch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationActionBatchRequestBody:
    confirmed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    synchronous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synchronous' }})
    

@dataclass
class UpdateOrganizationActionBatchRequest:
    path_params: UpdateOrganizationActionBatchPathParams = field(default=None)
    request: Optional[UpdateOrganizationActionBatchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationActionBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_action_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
