from dataclasses import dataclass, field



@dataclass
class DcimPlatformsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsDeleteRequest:
    path_params: DcimPlatformsDeletePathParams = field(default=None)
    

@dataclass
class DcimPlatformsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
