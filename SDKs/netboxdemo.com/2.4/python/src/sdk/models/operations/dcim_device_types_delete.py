from dataclasses import dataclass, field



@dataclass
class DcimDeviceTypesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesDeleteRequest:
    path_params: DcimDeviceTypesDeletePathParams = field()
    

@dataclass
class DcimDeviceTypesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
