from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsPathParams:
    spec_type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spec_type_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsRequest:
    path_params: GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsPathParams = field(default=None)
    

@dataclass
class GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    property_param_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
