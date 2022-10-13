from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSpecProductTypeListOfWorkgroupPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecProductTypeListOfWorkgroupRequest:
    path_params: GetSpecProductTypeListOfWorkgroupPathParams = field(default=None)
    

@dataclass
class GetSpecProductTypeListOfWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    workgroup_attribute_list_vo: Optional[Any] = field(default=None)
    
