from dataclasses import dataclass, field



@dataclass
class DcimVirtualChassisDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimVirtualChassisDeleteRequest:
    path_params: DcimVirtualChassisDeletePathParams = field(default=None)
    

@dataclass
class DcimVirtualChassisDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
