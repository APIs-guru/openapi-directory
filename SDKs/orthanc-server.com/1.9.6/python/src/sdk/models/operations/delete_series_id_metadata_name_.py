from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteSeriesIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDMetadataNameRequest:
    headers: DeleteSeriesIDMetadataNameHeaders = field()
    path_params: DeleteSeriesIDMetadataNamePathParams = field()
    

@dataclass
class DeleteSeriesIDMetadataNameResponse:
    content_type: str = field()
    status_code: int = field()
    
