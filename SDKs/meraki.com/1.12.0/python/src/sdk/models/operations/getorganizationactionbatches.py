from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetOrganizationActionBatchesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationActionBatchesStatusEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class GetOrganizationActionBatchesQueryParams:
    status: Optional[GetOrganizationActionBatchesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationActionBatchesRequest:
    path_params: GetOrganizationActionBatchesPathParams = field(default=None)
    query_params: GetOrganizationActionBatchesQueryParams = field(default=None)
    

@dataclass
class GetOrganizationActionBatchesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_action_batches_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
