from dataclasses import dataclass, field



@dataclass
class DcimVirtualChassisDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimVirtualChassisDeleteRequest:
    path_params: DcimVirtualChassisDeletePathParams = field()
    

@dataclass
class DcimVirtualChassisDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
