from dataclasses import dataclass, field



@dataclass
class DcimRackRolesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesDeleteRequest:
    path_params: DcimRackRolesDeletePathParams = field(default=None)
    

@dataclass
class DcimRackRolesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
