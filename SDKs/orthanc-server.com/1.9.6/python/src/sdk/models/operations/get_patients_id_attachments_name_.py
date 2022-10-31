from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPatientsIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameRequest:
    path_params: GetPatientsIDAttachmentsNamePathParams = field(default=None)
    headers: GetPatientsIDAttachmentsNameHeaders = field(default=None)
    

@dataclass
class GetPatientsIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    get_patients_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
