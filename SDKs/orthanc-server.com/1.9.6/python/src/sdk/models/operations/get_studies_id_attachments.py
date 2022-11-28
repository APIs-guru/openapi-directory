from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDAttachmentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsRequest:
    path_params: GetStudiesIDAttachmentsPathParams = field()
    

@dataclass
class GetStudiesIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    
