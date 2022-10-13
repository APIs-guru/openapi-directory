from dataclasses import dataclass, field



@dataclass
class DcimDeviceBaysDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysDeleteRequest:
    path_params: DcimDeviceBaysDeletePathParams = field(default=None)
    

@dataclass
class DcimDeviceBaysDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
