from dataclasses import dataclass, field



@dataclass
class DcimDeviceTypesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesDeleteRequest:
    path_params: DcimDeviceTypesDeletePathParams = field(default=None)
    

@dataclass
class DcimDeviceTypesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
