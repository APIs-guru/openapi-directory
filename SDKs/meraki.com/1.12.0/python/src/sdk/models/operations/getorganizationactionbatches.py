from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetOrganizationActionBatchesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationActionBatchesStatusEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class GetOrganizationActionBatchesQueryParams:
    status: Optional[GetOrganizationActionBatchesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationActionBatchesRequest:
    path_params: GetOrganizationActionBatchesPathParams = field()
    query_params: GetOrganizationActionBatchesQueryParams = field()
    

@dataclass
class GetOrganizationActionBatchesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_action_batches_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
