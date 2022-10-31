from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteSeriesIDMetadataNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDMetadataNameRequest:
    path_params: DeleteSeriesIDMetadataNamePathParams = field(default=None)
    headers: DeleteSeriesIDMetadataNameHeaders = field(default=None)
    

@dataclass
class DeleteSeriesIDMetadataNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
