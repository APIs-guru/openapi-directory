from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDAttachmentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsRequest:
    path_params: GetSeriesIDAttachmentsPathParams = field()
    

@dataclass
class GetSeriesIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    
