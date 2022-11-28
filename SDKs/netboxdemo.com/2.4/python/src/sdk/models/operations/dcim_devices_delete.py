from dataclasses import dataclass, field



@dataclass
class DcimDevicesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesDeleteRequest:
    path_params: DcimDevicesDeletePathParams = field()
    

@dataclass
class DcimDevicesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
