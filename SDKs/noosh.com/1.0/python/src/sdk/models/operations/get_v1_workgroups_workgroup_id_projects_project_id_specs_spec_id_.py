from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest:
    path_params: GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams = field(default=None)
    

@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
