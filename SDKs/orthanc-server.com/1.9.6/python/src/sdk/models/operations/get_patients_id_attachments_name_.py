from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPatientsIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameRequest:
    headers: GetPatientsIDAttachmentsNameHeaders = field()
    path_params: GetPatientsIDAttachmentsNamePathParams = field()
    

@dataclass
class GetPatientsIDAttachmentsNameResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_patients_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    
