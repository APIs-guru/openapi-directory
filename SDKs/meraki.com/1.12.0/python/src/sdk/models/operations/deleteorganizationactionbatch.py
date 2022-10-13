from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationActionBatchPathParams:
    action_batch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationActionBatchRequest:
    path_params: DeleteOrganizationActionBatchPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationActionBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
