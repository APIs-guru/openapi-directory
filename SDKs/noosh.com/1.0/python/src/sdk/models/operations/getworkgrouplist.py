from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetWorkgroupListQueryParams:
    workgroup_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workgroup_name', 'style': 'form', 'explode': True }})
    workgroup_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'workgroup_types', 'style': 'form', 'explode': False }})
    

@dataclass
class GetWorkgroupListRequest:
    query_params: GetWorkgroupListQueryParams = field()
    

@dataclass
class GetWorkgroupListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    workgroup_list_vo: Optional[Any] = field(default=None)
    
