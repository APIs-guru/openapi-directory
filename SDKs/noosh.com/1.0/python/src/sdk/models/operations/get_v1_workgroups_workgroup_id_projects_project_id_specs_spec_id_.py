from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest:
    path_params: GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams = field()
    

@dataclass
class GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_list_vo: Optional[Any] = field(default=None)
    
