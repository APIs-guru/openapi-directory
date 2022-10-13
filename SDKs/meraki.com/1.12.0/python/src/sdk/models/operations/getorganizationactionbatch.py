from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationActionBatchPathParams:
    action_batch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationActionBatchRequest:
    path_params: GetOrganizationActionBatchPathParams = field(default=None)
    

@dataclass
class GetOrganizationActionBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_action_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
