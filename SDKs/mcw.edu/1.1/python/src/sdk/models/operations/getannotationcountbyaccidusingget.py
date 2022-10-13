from dataclasses import dataclass, field



@dataclass
class GetAnnotationCountByAccIDUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = field(default=None, metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationCountByAccIDUsingGetRequest:
    path_params: GetAnnotationCountByAccIDUsingGetPathParams = field(default=None)
    

@dataclass
class GetAnnotationCountByAccIDUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
