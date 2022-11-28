from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSeriesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameRequest:
    headers: GetSeriesIDAttachmentsNameHeaders = field()
    path_params: GetSeriesIDAttachmentsNamePathParams = field()
    

@dataclass
class GetSeriesIDAttachmentsNameResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_series_id_attachments_name_200_application_json_any: Optional[Any] = field(default=None)
    
