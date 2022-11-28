from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecProductTypeListOfWorkgroupPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecProductTypeListOfWorkgroupRequest:
    path_params: GetSpecProductTypeListOfWorkgroupPathParams = field()
    

@dataclass
class GetSpecProductTypeListOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    workgroup_attribute_list_vo: Optional[Any] = field(default=None)
    
