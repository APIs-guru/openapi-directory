from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationActionBatchPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationActionBatchRequestBodyActions:
    body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    operation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class CreateOrganizationActionBatchRequestBody:
    actions: List[CreateOrganizationActionBatchRequestBodyActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    confirmed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    synchronous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synchronous' }})
    

@dataclass
class CreateOrganizationActionBatchRequest:
    path_params: CreateOrganizationActionBatchPathParams = field(default=None)
    request: CreateOrganizationActionBatchRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationActionBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_action_batch_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
