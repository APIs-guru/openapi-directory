from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutSeriesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSeriesIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSeriesIDAttachmentsNameRequest:
    headers: PutSeriesIDAttachmentsNameHeaders = field()
    path_params: PutSeriesIDAttachmentsNamePathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class PutSeriesIDAttachmentsNameResponse:
    content_type: str = field()
    status_code: int = field()
    put_series_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    
