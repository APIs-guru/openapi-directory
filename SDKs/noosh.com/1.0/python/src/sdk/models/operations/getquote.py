from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQuotePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    quote_id: str = field(metadata={'path_param': { 'field_name': 'quote_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuoteRequest:
    path_params: GetQuotePathParams = field()
    

@dataclass
class GetQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    quote_expand_vo: Optional[Any] = field(default=None)
    
