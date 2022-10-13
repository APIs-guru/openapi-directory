from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetWorkgroupListQueryParams:
    workgroup_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workgroup_name', 'style': 'form', 'explode': True }})
    workgroup_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'workgroup_types', 'style': 'form', 'explode': False }})
    

@dataclass
class GetWorkgroupListRequest:
    query_params: GetWorkgroupListQueryParams = field(default=None)
    

@dataclass
class GetWorkgroupListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    workgroup_list_vo: Optional[Any] = field(default=None)
    
