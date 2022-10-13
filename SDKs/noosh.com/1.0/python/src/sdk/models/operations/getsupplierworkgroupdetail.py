from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSupplierWorkgroupDetailPathParams:
    bu_supplier_workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'bu_supplier_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSupplierWorkgroupDetailRequest:
    path_params: GetSupplierWorkgroupDetailPathParams = field(default=None)
    

@dataclass
class GetSupplierWorkgroupDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    supplier_workgroup_expand_vo: Optional[Any] = field(default=None)
    
