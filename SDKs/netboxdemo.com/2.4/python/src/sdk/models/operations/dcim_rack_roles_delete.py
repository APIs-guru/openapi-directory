from dataclasses import dataclass, field



@dataclass
class DcimRackRolesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesDeleteRequest:
    path_params: DcimRackRolesDeletePathParams = field()
    

@dataclass
class DcimRackRolesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
