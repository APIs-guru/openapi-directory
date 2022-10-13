from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetQuoteListPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuoteListQueryParams:
    quote_state_id_use_filters_equal_quote_state_id_111111_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quote_state_id, use filters={"quote_state_id":111111}', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQuoteListRequest:
    path_params: GetQuoteListPathParams = field(default=None)
    query_params: GetQuoteListQueryParams = field(default=None)
    

@dataclass
class GetQuoteListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    quote_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
