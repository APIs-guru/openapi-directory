from dataclasses import dataclass, field



@dataclass
class DcimDeviceBaysDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysDeleteRequest:
    path_params: DcimDeviceBaysDeletePathParams = field()
    

@dataclass
class DcimDeviceBaysDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
