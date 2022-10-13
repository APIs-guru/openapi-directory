from dataclasses import dataclass, field



@dataclass
class DcimDeviceRolesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesDeleteRequest:
    path_params: DcimDeviceRolesDeletePathParams = field(default=None)
    

@dataclass
class DcimDeviceRolesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
