from dataclasses import dataclass, field



@dataclass
class DcimRegionsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsDeleteRequest:
    path_params: DcimRegionsDeletePathParams = field(default=None)
    

@dataclass
class DcimRegionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
