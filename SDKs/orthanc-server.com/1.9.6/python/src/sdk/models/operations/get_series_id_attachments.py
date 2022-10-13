from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDAttachmentsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsRequest:
    path_params: GetSeriesIDAttachmentsPathParams = field(default=None)
    

@dataclass
class GetSeriesIDAttachmentsResponse:
    content_type: str = field(default=None)
    get_series_id_attachments_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
