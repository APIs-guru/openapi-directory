from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetInstancesIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameRequest:
    path_params: GetInstancesIDAttachmentsNamePathParams = field(default=None)
    headers: GetInstancesIDAttachmentsNameHeaders = field(default=None)
    

@dataclass
class GetInstancesIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    get_instances_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
