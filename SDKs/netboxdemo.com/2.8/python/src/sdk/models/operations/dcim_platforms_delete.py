from dataclasses import dataclass, field



@dataclass
class DcimPlatformsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsDeleteRequest:
    path_params: DcimPlatformsDeletePathParams = field()
    

@dataclass
class DcimPlatformsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
