from dataclasses import dataclass, field



@dataclass
class DcimDeviceRolesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesDeleteRequest:
    path_params: DcimDeviceRolesDeletePathParams = field()
    

@dataclass
class DcimDeviceRolesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
