from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetInstancesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameRequest:
    headers: GetInstancesIDAttachmentsNameHeaders = field()
    path_params: GetInstancesIDAttachmentsNamePathParams = field()
    

@dataclass
class GetInstancesIDAttachmentsNameResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_instances_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    
