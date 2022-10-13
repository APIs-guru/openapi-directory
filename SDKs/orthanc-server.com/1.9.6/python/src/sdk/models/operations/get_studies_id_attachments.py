from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDAttachmentsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsRequest:
    path_params: GetStudiesIDAttachmentsPathParams = field(default=None)
    

@dataclass
class GetStudiesIDAttachmentsResponse:
    content_type: str = field(default=None)
    get_studies_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
