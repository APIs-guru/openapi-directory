from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetStudiesIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameRequest:
    path_params: GetStudiesIDAttachmentsNamePathParams = field(default=None)
    headers: GetStudiesIDAttachmentsNameHeaders = field(default=None)
    

@dataclass
class GetStudiesIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    get_studies_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
