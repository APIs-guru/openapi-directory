from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotationCountByAccIDUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = field(metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationCountByAccIDUsingGetRequest:
    path_params: GetAnnotationCountByAccIDUsingGetPathParams = field()
    

@dataclass
class GetAnnotationCountByAccIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
