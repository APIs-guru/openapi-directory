from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDAttachmentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsRequest:
    path_params: GetPatientsIDAttachmentsPathParams = field()
    

@dataclass
class GetPatientsIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    
