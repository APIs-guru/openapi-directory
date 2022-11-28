from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSupplierWorkgroupDetailPathParams:
    bu_supplier_workgroup_id: str = field(metadata={'path_param': { 'field_name': 'bu_supplier_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSupplierWorkgroupDetailRequest:
    path_params: GetSupplierWorkgroupDetailPathParams = field()
    

@dataclass
class GetSupplierWorkgroupDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    supplier_workgroup_expand_vo: Optional[Any] = field(default=None)
    
