from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSupplierWorkgroupListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSupplierWorkgroupListRequest:
    path_params: GetSupplierWorkgroupListPathParams = field()
    

@dataclass
class GetSupplierWorkgroupListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    supplier_workgroup_list_vo: Optional[Any] = field(default=None)
    
