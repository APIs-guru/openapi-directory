from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetV1WorkgroupsWorkgroupIDQuotesPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1WorkgroupsWorkgroupIDQuotesQueryParams:
    quote_state_id_use_filters_equal_quote_state_id_111111_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quote_state_id, use filters={"quote_state_id":111111}', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1WorkgroupsWorkgroupIDQuotesRequest:
    path_params: GetV1WorkgroupsWorkgroupIDQuotesPathParams = field(default=None)
    query_params: GetV1WorkgroupsWorkgroupIDQuotesQueryParams = field(default=None)
    

@dataclass
class GetV1WorkgroupsWorkgroupIDQuotesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    quote_of_wg_level_simple_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
