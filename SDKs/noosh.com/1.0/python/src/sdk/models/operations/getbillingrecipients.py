from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBillingRecipientsPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillingRecipientsRequest:
    path_params: GetBillingRecipientsPathParams = field(default=None)
    

@dataclass
class GetBillingRecipientsResponse:
    body: bytes = field(default=None)
    contacts_list_vo: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
