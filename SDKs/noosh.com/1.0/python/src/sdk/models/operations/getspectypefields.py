from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecTypeFieldsPathParams:
    spec_type_id: str = field(metadata={'path_param': { 'field_name': 'spec_type_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecTypeFieldsRequest:
    path_params: GetSpecTypeFieldsPathParams = field()
    

@dataclass
class GetSpecTypeFieldsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_type_fields_list_vo: Optional[Any] = field(default=None)
    
