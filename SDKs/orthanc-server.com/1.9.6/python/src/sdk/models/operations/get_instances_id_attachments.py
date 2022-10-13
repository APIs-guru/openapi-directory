from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDAttachmentsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsRequest:
    path_params: GetInstancesIDAttachmentsPathParams = field(default=None)
    

@dataclass
class GetInstancesIDAttachmentsResponse:
    content_type: str = field(default=None)
    get_instances_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
