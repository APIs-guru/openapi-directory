from dataclasses import dataclass, field



@dataclass
class GetInstancesIDPdfPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPdfRequest:
    path_params: GetInstancesIDPdfPathParams = field(default=None)
    

@dataclass
class GetInstancesIDPdfResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
