from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutPatientsIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPatientsIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class PutPatientsIDAttachmentsNameRequest:
    path_params: PutPatientsIDAttachmentsNamePathParams = field(default=None)
    headers: PutPatientsIDAttachmentsNameHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class PutPatientsIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    put_patients_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
