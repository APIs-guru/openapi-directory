from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQuotePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    quote_id: str = field(default=None, metadata={'path_param': { 'field_name': 'quote_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuoteRequest:
    path_params: GetQuotePathParams = field(default=None)
    

@dataclass
class GetQuoteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    quote_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
