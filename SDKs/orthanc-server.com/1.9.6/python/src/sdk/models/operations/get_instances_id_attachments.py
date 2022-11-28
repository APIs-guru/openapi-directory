from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDAttachmentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsRequest:
    path_params: GetInstancesIDAttachmentsPathParams = field()
    

@dataclass
class GetInstancesIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    
