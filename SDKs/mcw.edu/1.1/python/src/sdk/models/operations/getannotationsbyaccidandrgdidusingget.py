from dataclasses import dataclass, field



@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetRequest:
    path_params: GetAnnotationsByAccIDAndRgdIDUsingGetPathParams = field(default=None)
    

@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
