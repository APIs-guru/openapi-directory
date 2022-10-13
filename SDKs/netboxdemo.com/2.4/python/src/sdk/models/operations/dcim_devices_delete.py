from dataclasses import dataclass, field



@dataclass
class DcimDevicesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesDeleteRequest:
    path_params: DcimDevicesDeletePathParams = field(default=None)
    

@dataclass
class DcimDevicesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
